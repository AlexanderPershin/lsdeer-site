import React from 'react';
import styled from 'styled-components';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalInner = styled.div`
  flex: 0 1 0%;
  background-color: white;
  line-height: 0;
  user-select: none;
`;

const CloseBtn = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  margin-right: 2rem;
  margin-top: 2rem;
  &:hover {
    color: red;
  }
`;

const ScreenshotModal = ({ show = false, onClose = () => {}, imgSrc }) => {
  return show ? (
    <ModalWrap onClick={onClose}>
      <ModalInner>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        <img src={imgSrc} alt="" />
      </ModalInner>
    </ModalWrap>
  ) : null;
};

export default ScreenshotModal;
