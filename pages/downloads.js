import React from 'react';
import styled from 'styled-components';

import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import DownloadBtn from '../components/DownloadBtn';

const DownloadsTable = styled.div`
  align-self: flex-start;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  & > * {
    flex: 1;
  }
  & > * > * {
    width: 100%;
    flex: 1;
  }
  & > * + * {
    margin-top: 1rem;
  }
`;

const Downloads = () => {
  return (
    <PageContainer>
      <PageTitle>Downloads</PageTitle>
      <DownloadsTable>
        <PageTitle sub={true}>Windows</PageTitle>
        <a href="/installers/lsdeer Setup 0.1.0.exe -remove-this" download>
          <DownloadBtn>Download for Windows 10 x64</DownloadBtn>
        </a>

        <PageTitle sub={true}>Linux</PageTitle>
        <a href="#">
          <DownloadBtn disabled={true}>Download for Linux</DownloadBtn>
        </a>

        <PageTitle sub={true}>Mac</PageTitle>

        <a href="#">
          <DownloadBtn disabled={true}>Download for Mac</DownloadBtn>
        </a>
      </DownloadsTable>
    </PageContainer>
  );
};

export default Downloads;
