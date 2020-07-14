import React from 'react';
import styled from 'styled-components';

import DownloadBtn from './DownloadBtn';
import InfoLink from './InfoLink';

const StyledInfo = styled.div`
  padding-top: 4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Info = () => {
  return (
    <StyledInfo>
      <DownloadBtn />
      <InfoLink href="/features" label="Features" />
      <InfoLink href="/screenshots" label="Screenshots" />
      <InfoLink href="/faq" label="FAQ" />
    </StyledInfo>
  );
};

export default Info;
