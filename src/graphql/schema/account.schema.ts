import { gql } from "@apollo/client";
let CREATEUSER = gql`
  mutation Mutation(
    $name: String!
    $phone: String!
    $email: String!
    $password: String!
    $type: String!
  ) {
    createUser(
      name: $name
      phone: $phone
      email: $email
      password: $password
      type: $type
    ) {
      user {
        name
        phone
        email
        password
        type
        balance
        currency
        createdAt
      }
      token
    }
  }
`;
export { CREATEUSER };
const LOGIN = gql`
  mutation Mutation($phone: String!, $password: String!) {
    login(phone: $phone, password: $password) {
      user {
        name
        phone
        email
        password
        type
        balance
        currency
      }
      token
    }
  }
`;
export { LOGIN };

const getUser = gql`
  query Query($phone: String!) {
    getUser(phone: $phone) {
      id
      name
      phone
      email
      password
      type
      balance
      currency
      createdAt
    }
  }
`;
export { getUser };