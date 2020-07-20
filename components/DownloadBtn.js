import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

const Download = styled.button`
  background-color: ${({ theme }) => theme.colors.downloadBtn};
  padding: 0.6em 1.4em;
  font-size: 1.3rem;
  font-family: inherit;
  font-weight: 100;
  letter-spacing: 0.1em;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  user-select: none;
  &:hover {
    background-color: #388ce0;
  }
  @media (max-width: 42rem) {
    font-size: 1.9rem;
  }
`;

const DownloadBtn = () => {
  const handleDownloads = () => {
    Router.push('/downloads');
  };

  return <Download onClick={handleDownloads}>Download</Download>;
};

export default DownloadBtn;
