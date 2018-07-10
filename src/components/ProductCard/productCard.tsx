import * as React from 'react';
import { Flex, Button, Field, Card } from '@hackclub/design-system';
import { IProduct } from '../../models/product';
import { observer, inject } from 'mobx-react';
import { ShopStore } from '../../stores/shopStore';

interface IProductCardProps {
  onSubmit: any;
  shopStore?: ShopStore;
}

@inject('shopStore')
@observer
class ProductCard extends React.Component<IProductCardProps, IProduct> {
  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  };

  handleClose = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  };

  getProductList = (): IProduct[] => {
    if (typeof this.props.shopStore !== 'undefined') {
      return this.props.shopStore.products;
    } else {
      return [];
    }
  };

  public render() {
    const productList = this.getProductList().map(product => (
      <option key={product.name}>{product.name}</option>
    ));
    return (
      <Flex justify="space-around">
        <Card
          boxShadowSize="md"
          my={4}
          p={3}
          width={'90%'}
          color="black"
          bg="white"
          borderRadius={8}
        >
          <Field
            name="name"
            type="select"
            label="Select something"
            onChange={this.handleChange}
          >
            <option>Select Product</option>
            {productList}
          </Field>
          <Flex justify="flex-end">
            <Button onClick={this.handleClose} scale={true}>
              SELECT
            </Button>
          </Flex>
        </Card>
      </Flex>
    );
  }
}

export default ProductCard;
