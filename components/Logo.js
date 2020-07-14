import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.2em;
  line-height: 1.8;
`;

const DeerImg = styled.img`
  width: 100%;
  min-height: 25rem;
  margin: -5em;
`;

const StyledLogo = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Title>LSDEER</Title>
      <DeerImg src="/deer.svg" />
    </StyledLogo>
  );
};

export default Logo;
