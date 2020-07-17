import App from 'next/app';
import Head from 'next/head';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import InfoLink from '../components/InfoLink';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: calc(0.5em + 1vw);
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 0;
    padding: 0;
  }
  *,*:before,*:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  * + * {
      margin-top: 1rem;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    title: '#ffffff',
    logo: '#363636',
    downloadBtn: '#4996e3',
    infoLink: '#3e80c2',
    mainText: '#312e2e',
    bg: '#c0c0c0',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
  },
};

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4rem;
  & > * + * {
    margin-left: 0.5em;
    margin-top: 0;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
          <title>lsdeer</title>
          <link rel="icon" href="/deer-icon.png" />
        </Head>
        <ThemeProvider theme={theme}>
          <LinksWrapper>
            <InfoLink href="/" label="Home" />
            <InfoLink href="/features" label="Features" />
            <InfoLink href="/screenshots" label="Screenshots" />
            <InfoLink href="/faq" label="FAQ" />
          </LinksWrapper>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  }
}
