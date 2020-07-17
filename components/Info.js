import React from 'react';
import styled, { keyframes } from 'styled-components';

import DownloadBtn from './DownloadBtn';
import InfoLink from './InfoLink';

const StyledInfo = styled.div`
  padding-top: 4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
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
      <MockupImg>
        <source media="(min-width:2000px)" srcSet="/mockup_large.png" />
        <source media="(max-width:2000px)" srcSet="/mockup_small.png" />
        <img src="/mockup_small.png" alt="laptop" />
      </MockupImg>
      <DownloadBtn />
    </StyledInfo>
  );
};

export default Info;
