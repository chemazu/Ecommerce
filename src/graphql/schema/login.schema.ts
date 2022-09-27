import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        firstname
        lastname
        email
        password
        type
        createdAt
      }
      token
    }
  }
`;
export default LOGIN;
