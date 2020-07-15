import styled from 'styled-components';
import Head from 'next/head';

import Logo from '../components/Logo';
import Info from '../components/Info';

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

export default function Home() {
  return (
    <div className="container">
      <StyledMain>
        <Logo />
        <Info />
      </StyledMain>
    </div>
  );
}
