import React from 'react';
import styled from 'styled-components';

import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  & > * + * {
    margin-top: 1rem;
  }
`;
const Feature = styled.div`
  flex: 1;
  padding-left: 2rem;
  font-size: 1.4rem;
`;

const Features = () => {
  return (
    <PageContainer>
      <PageTitle>Features</PageTitle>
      <FeaturesList>
        <Feature>&bull; Completely customizable theme</Feature>
        <Feature>
          &bull; Color scheme extraction from the background image
        </Feature>
        <Feature>&bull; Multiple files creation/renaming</Feature>
        <Feature>&bull; Favorite files/folders</Feature>
        <Feature>&bull; Tabs management</Feature>
      </FeaturesList>
    </PageContainer>
  );
};

export default Features;
