import * as React from 'react';
import { ThemeProvider, Text, Section, Heading } from '@hackclub/design-system';
import AppLogo from './components/AppLogo';
import logo from './logo.svg';
import { Parallax } from 'react-parallax';
const image1 = '/iphone.jpeg';
class App extends React.Component {
  public render() {
    return (
      <ThemeProvider webfonts={true}>
        <div style={{ height: 500 }}>
          <Parallax bgImage={image1} strength={500} style={{ height: 500 }}>
            <div style={{ height: 500 }}>
              {/*         <div
                style={{
                  background: 'transparent',
                  padding: 20,
                  position: 'absolute',
                  top: '20%',
                  left: '50%',
                  fontWeight: 'bold',
                  transform: 'translate(-50%,-50%)'
                }}
              >
                HTML inside the parallax
              </div> */}
              <Heading.h3
                color={'black'}
                style={{
                  background: 'transparent',
                  padding: 20,
                  position: 'absolute',
                  top: '20%',
                  left: '50%',
                  fontWeight: 'bold',
                  transform: 'translate(-50%,-50%)'
                }}
              >
                Welcome to React
              </Heading.h3>
            </div>
          </Parallax>
        </div>
        <Section bg="black">
          <AppLogo src={logo} alt="logo" />
          <Heading.h3>Welcome to React</Heading.h3>
        </Section>
        <Text m={3} align="center">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
        <Section bg="accent">
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
