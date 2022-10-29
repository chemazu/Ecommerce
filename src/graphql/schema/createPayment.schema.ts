import { gql } from "@apollo/client";

const CREATEPAYMENT = gql`
  mutation CreatePayment(
    $userId: String
    $amount: Float
    $paystackResponse: PaystackResponse
  ) {
    createPayment(
      userId: $userId
      amount: $amount
      paystackResponse: $paystackResponse
    ) {
      status
      paymentId
    }
  }
`;
export default CREATEPAYMENT;
