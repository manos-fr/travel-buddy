import { gql } from 'graphql-request';

export const getPlaces = gql`
  query getPlaces($params: SearchParams!) {
    search(params: $params) {
      data {
        error
        results
        success
      }
    }
  }
`;

export const insertUserPlaceMutation = gql`
  mutation insertUserPlaceMutation(
    $user_id: Int!
    $area: String!
    $categories: jsonb!
    $api_id: String!
    $name: String!
  ) {
    insert_places_one(
      object: {
        area: $area
        categories: $categories
        name: $name
        api_id: $api_id
        users_places: {
          data: { user_id: $user_id }
          on_conflict: { constraint: users_places_pkey, update_columns: [] }
        }
      }
      on_conflict: { constraint: places_api_id_key, update_columns: [] }
    ) {
      area
      categories
      id
      name
      users_places {
        place_id
        user_id
      }
      api_id
    }
  }
`;
