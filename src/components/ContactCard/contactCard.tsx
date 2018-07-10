import * as React from 'react';
import { Flex, Button, Field, Card } from '@hackclub/design-system';

interface IContactCardProps {
  onSubmit: any;
}

interface IStepOneState {
  email: string;
  fname: string;
  lname: string;
}

class ContactCard extends React.Component<IContactCardProps, IStepOneState> {
  state: IStepOneState = {
    fname: '',
    email: '',
    lname: ''
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
    const { fname, lname, email } = this.state;
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
            name="fname"
            placeholder="First Name"
            label="First Name"
            error=""
            defaultValue={fname}
            onChange={this.handleChange}
          />
          <Field
            name="lname"
            placeholder="Last Name"
            label="Last Name"
            error=""
            defaultValue={lname}
            onChange={this.handleChange}
          />
          <Field
            name="email"
            placeholder="Email"
            type="email"
            label="Email"
            error=""
            defaultValue={email}
            onChange={this.handleChange}
          />
          <Flex justify="flex-end">
            <Button onClick={this.handleClose} scale={true}>
              SAVE
            </Button>
          </Flex>
        </Card>
      </Flex>

      /*       <div>
        <div>{text}</div>
        <input name="name" value={name} onChange={this.handleChange} />
      </div> */
    );
  }
}

export default ContactCard;
