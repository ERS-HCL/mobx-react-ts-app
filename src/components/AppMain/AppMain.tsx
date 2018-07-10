import * as React from 'react';
import AppHero from '../AppHero/AppHero';
import ContactCard from '../ContactCard/contactCard';
import ProductCard from '../ProductCard/productCard';
import { Flex } from '@hackclub/design-system';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { ShopStore } from '../../stores/shopStore';
import { IProduct } from '../../models/product';

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

@inject('shopStore')
@observer
class AppMain extends React.Component<IAppMainProps> {
  state = {
    checkedOut: false
  };

  handleProductSubmit = (data: any) => {
    console.log(data);
  };

  handleContactSubmit = (data: any) => {
    console.log(data);
    this.setState({
      checkedOut: true
    });
  };

  getProductList = (): IProduct[] => {
    if (typeof this.props.shopStore !== 'undefined') {
      return this.props.shopStore.products;
    } else {
      return [];
    }
  };
  public render() {
    const { checkedOut } = this.state;
    return (
      <div>
        {checkedOut && <Redirect to="/thankyou" />}
        <AppHero
          color={'black'}
          height={500}
          text={'React Shop'}
          image={image1}
        />
        <Flex bg="smoke" flexDirection="column">
          <ProductCard onSubmit={this.handleProductSubmit} />

          <ContactCard onSubmit={this.handleContactSubmit} />
        </Flex>
      </div>
    );
  }
}

export default AppMain;
