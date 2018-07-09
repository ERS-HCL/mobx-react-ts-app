import * as React from 'react';
import { ThemeProvider, Flex, Box } from '@hackclub/design-system';
import AppHero from './components/AppHero/AppHero';
import StepOne from './components/StepOne/stepOne';
const image1 =
  'https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=befea110acdbc00f7b94c872cf76f37b';
class App extends React.Component {
  handleSubmit = (data: any) => {
    console.log(data);
  };

  public render() {
    return (
      <ThemeProvider webfonts={true}>
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
        {/*        <Box p={3} color="white" bg="accent" boxShadowSize="md" my={4}>
          Hello
        </Box>
        <Text m={3} align="center">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
        <Section bg="white">
          <Text m={3} align="center">
            Hello
          </Text>
          <Text m={3} align="center">
            Hello
          </Text>
        </Section>
        <Section bg="white">
          <Text m={3} align="center">
            Hello
          </Text>
          <Text m={3} align="center">
            Hello
          </Text>
        </Section>
        <Section bg="white">
          <Text m={3} align="center">
            Hello
          </Text>
          <Text m={3} align="center">
            Hello
          </Text>
        </Section>
        <Section bg="white">
          <Text m={3} align="center">
            Hello
          </Text>
          <Text m={3} align="center">
            Hello
          </Text>
        </Section> */}
      </ThemeProvider>
    );
  }
}

export default App;
