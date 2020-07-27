import App from 'next/app';
import Head from 'next/head';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  keyframes,
} from 'styled-components';

import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookShareCount,
  TwitterIcon,
  VKIcon,
  RedditIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

import InfoLink from '../components/InfoLink';
import GHLogo from '../components/GHLogo';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: calc(0.5em + 1vw);
  }

  .container {
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding-top: 3.6rem;
    @media (max-width: 40rem) {
      padding-top: 5.6rem;
    }
  }
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 0;
    padding: 0;
    position: relative;
    &::-webkit-scrollbar {
      width: 1rem;
      background-color: #b0b0b0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #808080;
      border-left: 2px solid #b0b0b0;
      border-right: 2px solid #b0b0b0;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #606060;
    }
  }
  *,*:before,*:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #848484;
  }
  a {
    color: #388ce0;
    &:link {
      color: #388ce0;
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
      color: ${({ theme }) => theme.colors.infoLink};
    }
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    title: '#ffffff',
    logo: '#363636',
    downloadBtn: '#4996e3',
    infoLink: '#eeeeee',
    mainText: '#312e2e',
    bg: '#c0c0c0',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
  },
  sizes: {
    screenshotWidth: 800,
  },
  shadows: {
    menuShadowColor: 'rgba(0,0,0,0.5)',
    menuShadowOffsetX: 1,
    menuShadowOffsetY: 2,
    menuShadowBlur: 2,
    menuShadowSpread: 2,
  },
};

const slideIn = keyframes`
  from {
    transform: translateX(3rem);
  }
  to {
    transform: translateX(0);
  }
`;

const LinksWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4rem;
  padding-top: 2.5rem;
  background-color: #cdcdcd;
  z-index: 100;

  & > * {
    animation: ${slideIn} 5s linear 0s 1;
    transition: transform 5s linear;
  }
  & > * + * {
    margin-left: 0.5em;
    margin-top: 0;
  }

  @media (max-width: 40rem) {
    & > * {
      font-size: 2rem;
      line-height: 1.2;
    }
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 3rem;
  flex: 0 1 3rem;
  text-align: right;
  margin-top: 3rem;
  padding-right: 4rem;
  background-color: #a0a0a0;
  font-size: inherit;
  & > * {
    flex: 1;
  }
`;

const StyledViewCode = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.infoLink};
  font-size: 1.1rem;
  font-weight: 300;
  flex: 1 1 10rem;
  &:link {
    color: ${({ theme }) => theme.colors.infoLink};
  }
  &:visited {
    color: ${({ theme }) => theme.colors.infoLink};
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.infoLink};
  }
  &:active {
    color: ${({ theme }) => theme.colors.infoLink};
  }
  & > svg > path {
    fill: ${({ theme }) => theme.colors.infoLink};
  }
  & > span {
    color: inherit;
    margin-right: 0.5rem;
  }
  @media (max-width: 40rem) {
    flex: 1 1 3rem;
    & > span {
      display: none;
    }
  }
`;

const StyledGHLogo = styled(GHLogo)`
  height: 1.1rem;
  fill: ${({ theme }) => theme.colors.infoLink};
  @media (max-width: 40rem) {
    height: 1.5rem;
  }
`;

const ShareBtns = styled.div`
  flex: 1 1 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  & > * + * {
    margin-left: 0.5rem;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const shareUrl = 'https://lsdeer.vercel.app/';
    const title = 'lsdeer - file manager';

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
          <div className="container">
            <GlobalStyle />
            <LinksWrapper>
              <InfoLink href="/" label="Home" />
              <InfoLink href="/features" label="Features" />
              <InfoLink href="/screenshots" label="Screenshots" />
              <InfoLink href="/faq" label="FAQ" />
            </LinksWrapper>

            <Component {...pageProps} />

            <StyledFooter>
              <ShareBtns>
                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <TwitterIcon size={32} />
                </TwitterShareButton>
                <RedditShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <RedditIcon size={32} />
                </RedditShareButton>
                <WhatsappShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <LinkedinIcon size={32} />
                </LinkedinShareButton>
                <VKShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <VKIcon size={32} />
                </VKShareButton>
                <EmailShareButton
                  subject="Lsdeer"
                  body="customizable file manager"
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button"
                >
                  <EmailIcon size={32} />
                </EmailShareButton>
              </ShareBtns>

              <StyledViewCode
                href="https://github.com/AlexanderPershin/lsdeer"
                target="_blank"
              >
                <span>View code on GitHub</span>
                <StyledGHLogo
                  fillColor="#eeeeee"
                  height="1.1rem"
                  width="1.1rem"
                />
              </StyledViewCode>
            </StyledFooter>
          </div>
        </ThemeProvider>
      </>
    );
  }
}
