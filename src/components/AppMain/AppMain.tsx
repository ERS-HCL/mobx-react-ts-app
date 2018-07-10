import * as React from 'react';
import AppHero from '../AppHero/AppHero';
import ContactCard from '../ContactCard/contactCard';
import ProductCard from '../ProductCard/productCard';
import { Flex } from '@hackclub/design-system';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { ShopStore } from '../../stores/shopStore';
import { IProduct } from '../../models/product';
import { OrderStatus } from '../../models/order';

const image1 =
  'https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=befea110acdbc00f7b94c872cf76f37b';

interface IAppMainProps {
  /**
   * The store reference for the shop store.  Note that this needs to be optional
   * because the <Provider> component adjusts things appropriately, which the
   * code checker won't pick up on.
   *
   * @type {ShopStore}
   * @memberof AppMainProps
   */
  shopStore?: ShopStore;
}

interface IAppMainState {
  checkedOut: boolean;
}

@inject('shopStore')
@observer
class AppMain extends React.Component<IAppMainProps, IAppMainState> {
  state = {
    checkedOut: false
  };

  handleProductSubmit = (data: any) => {
    if (typeof this.props.shopStore !== 'undefined') {
      this.props.shopStore.setOrderStatus(OrderStatus.CONTACT_INFO);
    }
  };

  handleContactSubmit = (data: any) => {
    console.log(data);
    if (typeof this.props.shopStore !== 'undefined') {
      this.props.shopStore.setOrderStatus(OrderStatus.PAYMENT_PENDING);
    }
  };

  handlePaymentSubmit = (data: any) => {
    this.setState({
      checkedOut: true
    });
  };

  componentDidUpdate() {
    if (typeof this.props.shopStore !== 'undefined') {
      const element: any = document.getElementById(
        this.props.shopStore.order.status
      );
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getProductList = (): IProduct[] => {
    if (typeof this.props.shopStore !== 'undefined') {
      return this.props.shopStore.products;
    } else {
      return [];
    }
  };

  isCardVisible = (status: OrderStatus): boolean => {
    if (
      typeof this.props.shopStore !== 'undefined' &&
      this.props.shopStore.order.status === status
    ) {
      return true;
    } else {
      return false;
    }
  };

  public render() {
    const { checkedOut } = this.state;

    return (
      <div id="home">
        {checkedOut && <Redirect to="/thankyou" />}
        <AppHero
          color={'black'}
          height={500}
          text={'React Shop'}
          image={image1}
        />

        <Flex bg="smoke" flexDirection="column">
          <ProductCard onSubmit={this.handleProductSubmit} />

          {!this.isCardVisible(OrderStatus.PRODUCT_SELECTION) && (
            <div id="CONTACT_INFO">
              <ContactCard onSubmit={this.handleContactSubmit} key={1} />
            </div>
          )}

          {this.isCardVisible(OrderStatus.PAYMENT_PENDING) && (
            <div id="PAYMENT_PENDING">
              <ContactCard onSubmit={this.handlePaymentSubmit} key={2} />
            </div>
          )}
        </Flex>
      </div>
    );
  }
}

export default AppMain;
