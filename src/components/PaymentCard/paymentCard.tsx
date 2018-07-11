import * as React from 'react';
import {
  Flex,
  Button,
  Field,
  Card,
  Label,
  Divider,
  Box
} from '@hackclub/design-system';
import { IPayment, PaymentMode, PaymentStatus } from '../../models/payment';

interface IContactCardProps {
  onSubmit: any;
}

class PaymentCard extends React.Component<IContactCardProps, IPayment> {
  state: IPayment = {
    mode: PaymentMode.CARD,
    status: PaymentStatus.PAYMENT_PENDING
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  };

  handleClose = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  };

  public render() {
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
          <Label f={4}>Payment</Label>
          <Divider color="primary" />
          <Flex>
            <Box width={1 / 2}>
              <Field name="mode" type="select" onChange={this.handleChange}>
                <option>Mode</option>
                <option>CASH</option>
                <option>CARD</option>
              </Field>
            </Box>
            <Box width={1 / 2}>
              <Field name="status" type="select" onChange={this.handleChange}>
                <option>Status</option>
                <option>PAYMENT_PENDING</option>
                <option>PAID</option>
              </Field>
            </Box>
          </Flex>
          <Flex justify="flex-end">
            <Button onClick={this.handleClose} scale={true}>
              CHECKOUT
            </Button>
          </Flex>
        </Card>
      </Flex>
    );
  }
}

export default PaymentCard;
