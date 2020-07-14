import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledA = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.infoLink};
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
`;

const InfoLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <StyledA>{label}</StyledA>
    </Link>
  );
};

export default InfoLink;
