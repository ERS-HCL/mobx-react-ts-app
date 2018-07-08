import * as React from 'react';
import { Heading } from '@hackclub/design-system';
import logo from '../../logo.svg';
import AppLogo from '../AppLogo/AppLogo';
import { Parallax } from 'react-parallax';

interface IHeroProps {
  image: string;
  color: string;
  text: string;
  height: number;
}
const AppHero: React.SFC<IHeroProps> = props => {
  return (
    <Parallax bgImage={props.image} strength={props.height}>
      <div style={{ height: props.height }}>
        <AppLogo src={logo} alt="logo" />
        <Heading.h2
          color={props.color}
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
          {props.text}
        </Heading.h2>
      </div>
    </Parallax>
  );
};

export default AppHero;
