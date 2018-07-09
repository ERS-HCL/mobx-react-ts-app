import * as React from 'react';
import AppHero from '../AppHero/AppHero';
import StepOne from '../StepOne/stepOne';
import { Flex, Box } from '@hackclub/design-system';
import { Redirect } from 'react-router-dom';
const image1 =
  'https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=befea110acdbc00f7b94c872cf76f37b';
class AppMain extends React.Component {
  state = {
    checkedOut: false
  };
  handleSubmit = (data: any) => {
    console.log(data);
    this.setState({
      checkedOut: true
    });
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
        <Flex bg="smoke">
          <Box px={3} width={1}>
            <StepOne eventHandler={this.handleSubmit} />
          </Box>
        </Flex>
      </div>
    );
  }
}

export default AppMain;
