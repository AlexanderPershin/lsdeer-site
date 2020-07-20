import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import DownloadBtn from './DownloadBtn';

const StyledInfo = styled.div`
  padding-top: 4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 42rem) {
    justify-content: stretch;
    align-items: stretch;
  }
`;

const MockupImg = styled.picture`
  width: 20vw;
  transform: translateX(1rem);
  & > img {
    width: 100%;
  }
  @media (max-width: 42rem) {
    display: none;
  }
`;

const Info = () => {
  const handleDownload = () => {
    Router.push('/downloads');
  };

  return (
    <StyledInfo>
      <MockupImg>
        <source media="(min-width:2000px)" srcSet="/mockup_large.png" />
        <source media="(max-width:2000px)" srcSet="/mockup_small.png" />
        <img src="/mockup_small.png" alt="laptop" />
      </MockupImg>
      <DownloadBtn onClick={handleDownload}>Download</DownloadBtn>
    </StyledInfo>
  );
};

export default Info;
