import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Container, Text, Flex } from '@hackclub/design-system';
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
      <Flex bg="black">
        <Container style={{ height: '50px' }} m={2}>
          <Text fontSize={3} color="white" bold={true}>
            Total: {this.props.shopStore ? this.props.shopStore.orderTotal : 0}{' '}
            USD
          </Text>
        </Container>
      </Flex>
    );
  }
}

export default OrderTotal;
