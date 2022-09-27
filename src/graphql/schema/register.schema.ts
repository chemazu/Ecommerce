import { gql } from "@apollo/client";

const CREATEUSER = gql`
  mutation Mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $type: String!
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      type: $type
    ) {
      user {
        id
        name
        email
        password
        type
        createdAt
      }
      token
    }
  }
`;
export default CREATEUSER;
