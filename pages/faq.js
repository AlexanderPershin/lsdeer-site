import React from 'react';
import styled from 'styled-components';

import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  & > * + * {
    margin-top: 1rem;
  }
`;
const Q = styled.div`
  flex: 1;
  padding-left: 2rem;
  font-size: 1.4rem;
`;

const FAQ = () => {
  return (
    <PageContainer>
      <PageTitle>FAQ</PageTitle>
      <FAQList>
        <Q>
          <b>Question</b>: I faced infinite loading, how did it happen and what
          should I do?
        </Q>
        <Q>
          <b>Answer:</b> Node.js error writing your tabs.json file. Press ctrl+R
          to refresh LSDEER window
        </Q>
        <Q>
          <b>Question</b>: After I changed my color scheme and restarted
          application I see default theme again
        </Q>
        <Q>
          <b>Answer:</b> When make changes to settings always press "apply"
          button
        </Q>
        <Q>
          <b>Question</b>: I faced unknown bug what should I do?
        </Q>
        <Q>
          <b>Answer:</b> Almost any problem can be solved by pressing ctrl+R
          &#128578;
        </Q>
      </FAQList>
    </PageContainer>
  );
};

export default FAQ;
