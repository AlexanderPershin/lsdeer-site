import React from 'react';
import styled from 'styled-components';

const StyledConainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0 2em 2em;
  & > * + * {
    margin-top: 1rem;
  }
`;

const PageContainer = ({ children }) => {
  return <StyledConainer>{children}</StyledConainer>;
};

export default PageContainer;
