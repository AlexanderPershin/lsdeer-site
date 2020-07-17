import styled from 'styled-components';

import Logo from '../components/Logo';
import Info from '../components/Info';

import GHLogo from '../components/GHLogo';

const StyledMain = styled.main`
  display: flex;
  & > div:first-child {
    width: 70vw;
  }
  & > div:last-child {
    width: 30vw;
    padding-right: 4em;
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
  text-align: right;
  margin-top: 3rem;
  padding-right: 4rem;
`;

const StyledViewCode = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.infoLink};
  font-size: 1.1rem;
  font-weight: 300;
  &:link {
    color: green;
  }
  &:visited {
    color: ${({ theme }) => theme.colors.infoLink};
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #388ce0;
  }
  &:active {
    color: #ffffff;
  }
  & > svg > path {
    fill: inherit;
  }
`;

const StyledGHLogo = styled(GHLogo)`
  height: 1.1rem;
  fill: inherit;
`;

export default function Home() {
  return (
    <div className="container">
      <StyledMain>
        <Logo />
        <Info />
      </StyledMain>
      <StyledFooter>
        <StyledViewCode
          href="https://github.com/AlexanderPershin/lsdeer"
          target="_blank"
        >
          View code on GitHub{' '}
          <StyledGHLogo fillColor="#3e80c2" height="1.1rem" width="1.1rem" />
        </StyledViewCode>
      </StyledFooter>
    </div>
  );
}
