import { gql } from "@apollo/client";

const CREATEORDER = gql`
  mutation Mutation(
    $orderItems: [String]!
    $userId: String
    $orderTotal: Int
    $paymentId: String
  ) {
    createOrder(
      orderItems: $orderItems
      userId: $userId
      orderTotal: $orderTotal
      paymentId: $paymentId
    ) {
      status
      orderId
    }
  }
`;
export default CREATEORDER;
