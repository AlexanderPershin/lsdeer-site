import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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
    title: '#656565',
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

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
