import * as React from 'react';
import { Flex, Button, Field, Card } from '@hackclub/design-system';
import { IProduct } from '../../models/product';
import { observer, inject } from 'mobx-react';
import { ShopStore } from '../../stores/shopStore';

interface IProductCardProps {
  onSubmit: any;
  shopStore?: ShopStore;
  qty: any;
}

interface IProductCardState {
  product: IProduct;
}

@inject('shopStore')
@observer
class ProductCard extends React.Component<
  IProductCardProps,
  IProductCardState
> {
  constructor(props: IProductCardProps) {
    super(props);
    this.state = {
      product: {
        name: '',
        qty: 1,
        price: 0
      }
    };
  }

  handleChange = (e: any) => {
    const { name, value } = e.target;
    const product: any = this.getProductList().find(
      item => item.name === value
    );
    // console.log(product, value);
    this.setState({
      product: {
        ...this.state.product,
        qty: this.state.product.qty ? this.state.product.qty : 1,
        [name]: value,
        price: product ? product.price : 0
      }
    } as any);
  };

  handleQtyChange = (e: any) => {
    const { value } = e.target;
    this.setState({
      product: {
        ...this.state.product,
        qty: +value
      }
    } as any);
  };

  handleClose = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.product);
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
          <Field
            name="qty"
            type="number"
            label="X"
            min={1}
            max={100}
            onChange={this.handleQtyChange}
            defaultValue={this.props.qty}
          />
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
