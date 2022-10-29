import { gql } from "@apollo/client";

const CREATEORDER = gql`
  mutation CreateOrder(
    $userId: String
    $orderTotal: Float
    $paymentId: String
    $orderItems: [OrderItems]
  ) {
    createOrder(
      userId: $userId
      orderTotal: $orderTotal
      paymentId: $paymentId
      orderItems: $orderItems
    ) {
      status
      orderId
    }
  }
`;
export default CREATEORDER;
