import * as React from 'react';
import { ThemeProvider, Text, Section, Heading } from '@hackclub/design-system';
import AppLogo from './AppLogo';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider webfonts={true}>
        <Section bg="black">
          <AppLogo src={logo} alt="logo" />
          <Heading.h3>Welcome to React</Heading.h3>
        </Section>
        <Text m={3} align="center">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
      </ThemeProvider>
    );
  }
}

export default App;
