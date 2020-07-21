import React, { useState } from 'react';
import styled from 'styled-components';

import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import ScreenshotModal from '../components/ScreenshotModal';

const StyledImagesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
`;

const StyledImage = styled.picture`
  flex: 0 1 32%;
  & > img {
    width: 100%;
  }
`;

const Screenshots = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalSource, setModalSource] = useState(null);

  const handleCloseModal = () => {
    // setShowModal(false);
    setModalSource(null);
    return;
  };

  const handleShowModal = (imgSrc) => {
    setModalSource(imgSrc);
  };

  const renderScreenshots = (num) => {
    let outputArr = [];
    for (let i = 1; i <= num; i++) {
      outputArr.push(
        <StyledImage key={i}>
          <source media="(min-width:1800px)" srcSet={`/screenshots/${i}.png`} />
          <source
            media="(max-width:1800px)"
            srcSet={`/screenshots/${i}.5.png`}
          />
          <img
            src="/mockup_small.png"
            alt="laptop"
            onClick={() => handleShowModal(`/screenshots/${i}.png`)}
          />
        </StyledImage>
      );
    }
    return outputArr;
  };

  return (
    <PageContainer>
      <PageTitle>Screenshots</PageTitle>
      <StyledImagesWrap>{renderScreenshots(14)}</StyledImagesWrap>
      <ScreenshotModal
        show={modalSource ? true : false}
        onClose={handleCloseModal}
        imgSrc={modalSource}
      />
    </PageContainer>
  );
};

export default Screenshots;
