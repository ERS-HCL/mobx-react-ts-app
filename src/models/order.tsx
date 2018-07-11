import { IPayment } from './payment';
import { IProduct } from './product';

enum OrderStatus {
  PRODUCT_SELECTION = 'PRODUCT_SELECTION',
  CONTACT_INFO = 'CONTACT_INFO',
  PAYMENT_PENDING = 'PAYMENT_PENDING',
  CHECK_OUT = 'CHECK_OUT'
}

interface IContact {
  email: string;
  fname: string;
  lname: string;
}

interface IOrder {
  contact: IContact;
  product?: IProduct;
  payment?: IPayment;
  status: OrderStatus;
  viewStatus: OrderStatus[]; // Holds which all steps are visible at the moment
}

export { IOrder, IContact, OrderStatus };
