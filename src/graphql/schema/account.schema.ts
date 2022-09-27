import { gql } from "@apollo/client";
let CREATEUSER = gql`
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
        name
        phone
        email
        password
        type
        createdAt
      }
      token
    }
  }
`;
export { CREATEUSER };
const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        name
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

// const getUser = gql`
//   query Query($phone: String!) {
//     getUser(phone: $phone) {
//       id
//       name
//       phone
//       email
//       password
//       type
//       balance
//       currency
//       createdAt
//     }
//   }
// `;
// export { getUser };
