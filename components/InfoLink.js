import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledA = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.infoLink};
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.05em;
  &:link {
    color: green;
  }
  &:visited {
    color: gray;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #388ce0;
  }
  &:active {
    color: #ffffff;
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
