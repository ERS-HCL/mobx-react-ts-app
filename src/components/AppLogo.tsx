import styled from 'styled-components';

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  display: block;
  top: '5%';
  margin-left: auto;
  margin-right: auto;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default AppLogo;
