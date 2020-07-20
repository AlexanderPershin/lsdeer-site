import React from 'react';
import styled, { keyframes } from 'styled-components';

const sp = keyframes`
  from {
    letter-spacing: 0.15em;
  }
  to {
    letter-spacing: 0.2em;
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.2em;
  line-height: 0.8;
  transition: letter-spacing 5s linear;
  animation: ${sp} 5s linear 0s 1;
  @media (max-width: 56rem) {
    font-size: 7rem;
  }
`;

const DeerImg = styled.img`
  width: 100%;
  min-height: 25rem;
  margin: -3em;
  transform: scale(1.2);
`;

const StyledLogo = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledDesc = styled.span`
  font-size: 1.5rem;
  color: #848484;
  font-weight: bold;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Title>LSDEER</Title>
      <StyledDesc>File manager</StyledDesc>
      <DeerImg src="/deer.svg" />
    </StyledLogo>
  );
};

export default Logo;
