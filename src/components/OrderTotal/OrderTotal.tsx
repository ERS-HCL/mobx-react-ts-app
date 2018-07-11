import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Container, Text } from '@hackclub/design-system';
import { ShopStore } from '../../stores/shopStore';

interface IOrderTotalProps {
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
class OrderTotal extends React.Component<IOrderTotalProps> {
  public render() {
    return (
      <Container style={{ height: '50px' }}>
        <Text fontSize={2}>
          {this.props.shopStore ? this.props.shopStore.orderTotal : 0}
        </Text>
      </Container>
    );
  }
}

export default OrderTotal;
