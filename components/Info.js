import React from 'react';
import styled, { keyframes } from 'styled-components';

import DownloadBtn from './DownloadBtn';
import InfoLink from './InfoLink';

const StyledInfo = styled.div`
  padding-top: 4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  & > * + * {
    margin-left: 1rem;
    margin-top: 0;
  }
`;

const MockupImg = styled.picture`
  width: 20vw;
  & > img {
    width: 100%;
  }
`;

const Info = () => {
  return (
    <StyledInfo>
      <DownloadBtn />
      <MockupImg>
        <source media="(min-width:2000px)" srcSet="/mockup_large.png" />
        <source media="(max-width:2000px)" srcSet="/mockup_small.png" />
        <img src="/mockup_small.png" alt="laptop" />
      </MockupImg>
      <LinksWrapper>
        <InfoLink href="/features" label="Features" />
        <InfoLink href="/screenshots" label="Screenshots" />
        <InfoLink href="/faq" label="FAQ" />
      </LinksWrapper>
    </StyledInfo>
  );
};

export default Info;
