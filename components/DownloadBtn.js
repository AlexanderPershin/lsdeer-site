import React from 'react';
import styled from 'styled-components';

const Download = styled.button`
  position: relative;
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
  white-space: nowrap;
  user-select: none;
  z-index: 50;
  &:hover {
    background-color: #388ce0;
  }
  &:disabled {
    background-color: #7a7b7b;
    color: darkgray;
  }
  @media (max-width: 42rem) {
    font-size: 1.9rem;
    white-space: normal;
  }
`;

const DownloadBtn = ({ children, onClick = () => {}, disabled = false }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Download onClick={handleClick} disabled={disabled}>
      {children}
    </Download>
  );
};

export default DownloadBtn;
