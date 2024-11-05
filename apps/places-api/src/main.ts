import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import http from 'http';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import cors from 'cors';
import { gql } from 'graphql-tag';
import { searchGeoapify } from './app/geoapify-service';

const host = process.env.API_HOST ?? 'localhost';
const port = process.env.API_PORT ? Number(process.env.API_PORT) : 3580;

const app = express();
const httpServer = http.createServer(app);

const typeDefs = gql`
  #graphql
  scalar JSON
  scalar JSONObject
  type Query {
    hello: String
    search(params: SearchParams!): QueryResponse!
  }
  type QueryResponse {
    data: Data!
  }
  type Data {
    success: Boolean!
    results: JSON
    error: String
  }
  input SearchParams {
    name: String!
    country: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
    search: async (_root, { params }) => {
      try {
        const results = await searchGeoapify(params);

        return {
          data: {
            success: true,
            results,
          },
        };
      } catch (error) {
        console.log({ error });
        return {
          data: {
            success: false,
            error: error.message,
          },
        };
      }
    },
  },
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
});

app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

server.start().then(() => {
  app.use('/graphql', cors(), bodyParser.json(), expressMiddleware(server));

  httpServer.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
    console.log(`[ graphql ] http://${host}:${port}/graphql`);
  });
});
