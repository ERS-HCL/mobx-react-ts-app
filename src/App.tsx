import * as React from 'react';
import { ThemeProvider, Text, Section, Heading } from '@hackclub/design-system';
import AppLogo from './components/AppLogo';
import logo from './logo.svg';
import { Parallax } from 'react-parallax';
const image1 =
  'https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=befea110acdbc00f7b94c872cf76f37b';
class App extends React.Component {
  public render() {
    return (
      <ThemeProvider webfonts={true}>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <AppLogo src={logo} alt="logo" />
            <Heading.h2
              color={'black'}
              style={{
                background: 'transparent',
                padding: 20,
                position: 'absolute',
                top: '25%',
                left: '50%',
                fontWeight: 'bold',
                transform: 'translate(-50%,-50%)'
              }}
            >
              React Shop
            </Heading.h2>
          </div>
        </Parallax>
        {/*         <Section bg="black">
          <AppLogo src={logo} alt="logo" />
          <Heading.h3>Welcome to React</Heading.h3>
        </Section> */}
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
        </Section>
      </ThemeProvider>
    );
  }
}

export default App;
