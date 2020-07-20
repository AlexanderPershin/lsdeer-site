import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledA = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.infoLink};
  font-weight: 500;
  letter-spacing: -0.05em;
  font-size: 1.5rem;
  line-height: 0.7;
  &:link {
    color: ${({ theme }) => theme.colors.infoLink};
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
`;

const InfoLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <StyledA>{label}</StyledA>
    </Link>
  );
};

export default InfoLink;
