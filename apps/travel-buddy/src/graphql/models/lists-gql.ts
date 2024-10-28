import { gql } from '@apollo/client';

export const CREATE_LIST = gql`
  mutation CreateList($name: String!, $description: String, $photo: String, $owner: Int!) {
    insert_lists_one(object: {
      Name: $name,
      Description: $description,
      Photo: $photo,
      Owner: $owner
    }) {
      id
      Name
      Description
      Photo
      Owner
      Creation_date
      Update_date
    }
  }
`;


export interface CreateListVariables {
  name: string; 
  description?: string | null; 
  photo?: string | null;
  owner: number; 
}

export interface CreateListResponse {
  insert_lists_one: {
    id: number; 
    Name: string; 
    Description: string | null; 
    Photo: string | null; 
    Owner: number; 
    Creation_date: Date; 
    Update_date: Date | null; 
  };
}
