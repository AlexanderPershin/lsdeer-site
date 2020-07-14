import styled from 'styled-components';
import Head from 'next/head';

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.title};
`;

const DeerImg = styled.img`
  width: 100%;
  height: auto;
  margin: -5rem;
`;

const Logo = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

      <main>
        <Logo>
          <Title>LSDEER</Title>
          <DeerImg src="/deer.svg" />
        </Logo>
      </main>
    </div>
  );
}
