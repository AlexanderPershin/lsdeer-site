import React, { useEffect } from 'react';
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
  flex: 1 1 0%;
  background-color: transparent;
  line-height: 0;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: ${({ theme }) => theme.sizes.screenshotWidth}px;
    box-shadow: ${({ theme }) =>
      `${theme.shadows.menuShadowOffsetX}px ${theme.shadows.menuShadowOffsetY}px ${theme.shadows.menuShadowBlur}px ${theme.shadows.menuShadowSpread}px ${theme.shadows.menuShadowColor}`};
  }
  @media (max-width: 800px) {
    & > img {
      width: 100%;
    }
  }
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
  const handleEsc = (e) => {
    if (e.which === 27) {
      onClose();
    }
    return;
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

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
