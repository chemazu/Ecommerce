import { gql } from "@apollo/client";

const CREATEPAYMENT = gql`
  mutation Mutation($userId: String, $amount: Int, $platform: String) {
    createPayment(userId: $userId, amount: $amount, platform: $platform) {
      status
      paymentId
    }
  }
`;
export default CREATEPAYMENT;
