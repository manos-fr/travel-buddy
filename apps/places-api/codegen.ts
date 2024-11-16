import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/main.ts',
  generates: {
    'src/gql/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        scalars: {
          JSON: 'any',
          JSONObject: 'Record<string, any>',
        },
        useIndexSignature: true,
      },
    },
  },
};

export default config;
