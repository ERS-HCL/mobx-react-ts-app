import * as React from 'react';
import { BackgroundImage, Text, Button, Flex } from '@hackclub/design-system';
import { Redirect } from 'react-router-dom';
const image1 =
  'https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e026ea3420a71b8cdeb007f06e1f6eb3&auto=format&fix=max';

class ThankYou extends React.Component {
  state = {
    redirect: false
  };

  setRedirect = (e: any) => {
    this.setState({
      redirect: true
    });
  };

  public render() {
    const scale: boolean = true;
    const { redirect } = this.state;
    return (
      <div>
        {redirect && <Redirect to="/" />}
        <BackgroundImage
          scale={scale}
          src={image1}
          height={'100vh'}
          aria-label={'Thank you'}
          blur={'20%'}
        >
          <Text fontSize={6} bold={true} align="center" color="white" p={4}>
            Thank you for shopping !!
          </Text>

          <Flex justify="center" mt={300}>
            <Button
              align="center"
              bg="black"
              p={4}
              onClick={this.setRedirect}
              scale={true}
            >
              CONTINUE SHOPPING
            </Button>
          </Flex>
        </BackgroundImage>
      </div>
    );
  }
}

export default ThankYou;
