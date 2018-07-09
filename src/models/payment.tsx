enum PaymentMode {
  CASH = 'CASH',
  CARD = 'CARD'
}
enum PaymentStatus {
  PAID = 'PAID',
  PAYMENT_PENDING = 'PAYMENT_PENDING'
}
interface IPayment {
  mode: PaymentMode;
  status: PaymentStatus;
}

export { PaymentMode, PaymentStatus, IPayment };
