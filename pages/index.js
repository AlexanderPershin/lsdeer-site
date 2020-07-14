import styled from 'styled-components';
import Head from 'next/head';

import Logo from '../components/Logo';
import Info from '../components/Info';

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-right: 2em;
`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
        <title>lsdeer</title>
        <link rel="icon" href="/deer-icon.png" />
      </Head>

      <StyledMain>
        <Logo />
        <Info />
      </StyledMain>
    </div>
  );
}
