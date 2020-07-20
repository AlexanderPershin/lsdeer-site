import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: inherit;
  font-size: ${({ sub }) => (sub ? '3rem' : '5rem')};
  font-weight: 100;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.1em;
  @media (max-width: 42rem) {
    height: 4rem;
    text-align: center;
  }
`;

const PageTitle = ({ children, sub = false }) => {
  return <StyledTitle sub={sub}>{children}</StyledTitle>;
};

export default PageTitle;
