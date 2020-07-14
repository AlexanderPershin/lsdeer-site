import React from 'react';
import styled from 'styled-components';

const Download = styled.button`
  background-color: ${({ theme }) => theme.colors.downloadBtn};
  padding: 1em 2em;
  font-size: 1.3rem;
  font-family: inherit;
  font-weight: 100;
  letter-spacing: 0.2em;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

const DownloadBtn = () => {
  return <Download>DOWNLOAD</Download>;
};

export default DownloadBtn;
