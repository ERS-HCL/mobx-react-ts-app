import { observable, action, computed, reaction } from 'mobx';
import { IOrder, IContact, OrderStatus } from '../models/order';
import { IProduct } from '../models/product';
import { IPayment } from '../models/payment';

export class ShopStore {
  @observable order: IOrder;
  @observable contact: IContact;
  @observable products: IProduct[] = [];

  @action
  initOrder() {
    this.contact = {
      email: '',
      fname: '',
      lname: ''
    } as IContact;
    const initialOrder = {
      contact: this.contact,
      payment: undefined,
      product: undefined,
      status: OrderStatus.PRODUCT_SELECTION
    } as IOrder;

    this.order = initialOrder;

    reaction(
      () => this.order.status,
      () => {
        // Reset order to original state
        if (this.order.status === OrderStatus.PRODUCT_SELECTION) {
          this.order = initialOrder;
        }
      }
    );
  }

  @computed
  get orderTotal() {
    if (this.order.product) {
      const orderProduct: IProduct = this.order.product;
      return (
        (orderProduct.qty ? orderProduct.qty : 0) *
        (orderProduct.price ? orderProduct.price : 0)
      );
    } else {
      return 0;
    }
  }

  @action
  setContact = (contact: IContact) => {
    this.order.contact = contact;
  };

  @action
  setProduct = (product: IProduct) => {
    this.order.product = product;
  };

  @action
  setPayment = (payment: IPayment) => {
    this.order.payment = payment;
  };

  @action
  setOrderStatus = (orderStatus: OrderStatus) => {
    this.order.status = orderStatus;
  };

  @action
  addProducts = (products: IProduct[]) => {
    this.products = products;
  };

  /*  @action
  initCKAV() {
    this.ckav = <CKAV>{
      address: '',
      zipcode: 0
    };
  }

  @action
  setCKAV = (zipcode: any, address: any) => {
    this.ckav.zipcode = zipcode;
    this.ckav.address = address;
  };

  @computed
  get contactInfo() {
    return (this.ckav.address || '') + (this.ckav.zipcode || '');
  }

  @action
  handleCheckoutStep = (type: string) => {
    switch (type) {
      case 'contact': {
        this.checkout.nextCard = 'address';
        if (this.checkout.cardsClicked.indexOf('address') < 0) {
          this.checkout.cardsEnabled.push('address');
        }
        break;
      }
      case 'address': {
        this.checkout.nextCard = 'instrument';
        if (this.checkout.cardsClicked.indexOf('instrument') < 0) {
          this.checkout.cardsEnabled.push('instrument');
        }
        break;
      }
      case 'instrument': {
        this.checkout.nextCard = 'payment';
        if (this.checkout.cardsClicked.indexOf('payment') < 0) {
          this.checkout.cardsEnabled.push('payment');
        }
        break;
      }
      case 'payment': {
        this.checkout.nextCard = 'checkout';
        this.checkout.checkedOut = true;
        break;
      }
      default: {
        this.checkout.nextCard = 'address';
        if (this.checkout.cardsClicked.indexOf('address') < 0) {
          this.checkout.cardsEnabled.push('address');
        }
        break;
      }
    }
    if (this.checkout.cardsClicked.indexOf(type) < 0) {
      this.checkout.cardsClicked.push(type);
    }
  };

  @action
  saveNote(note: Note) {
    const idx = this.notes.findIndex(n => note.noteId === n.noteId);
    if (idx < 0) {
      this.notes.push(note);
    } else {
      this.notes[idx] = note;
    }
  }

  @action
  deleteNote(note: Note) {
    const idx = this.notes.findIndex(n => n.noteId === note.noteId);
    if (idx < 0) {
      throw new Error(`Note ${note.noteId} not found`);
    } else {
      this.notes.splice(idx, 1);
    }
  }

  @action
  getNote(noteId: string): Note {
    const idx = this.notes.findIndex(n => n.noteId === noteId);
    if (idx < 0) {
      throw new Error(`Note ${noteId} not found`);
    } else {
      return this.notes[idx];
    }
  }
}

*/
}

const observableShopStore = new ShopStore();

const newProducts = [
  {
    name: 'IPhone 8 64GB',
    price: 400.0
  },
  {
    name: 'IPhone 8 256GB',
    price: 700.0
  },
  {
    name: 'IPhone 8 Plus 64GB',
    price: 900.0
  },
  {
    name: 'IPhone 8 Plus 256GB',
    price: 1000.0
  },
  {
    name: 'IPhone X',
    price: 2000.0
  }
] as IProduct[];

observableShopStore.initOrder();
observableShopStore.addProducts(newProducts);

export default observableShopStore;
