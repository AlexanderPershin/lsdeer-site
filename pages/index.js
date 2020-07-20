import styled from 'styled-components';

import Logo from '../components/Logo';
import Info from '../components/Info';

const StyledMain = styled.main`
  display: flex;
  & > div:first-child {
    width: 70vw;
  }
  & > div:last-child {
    width: 30vw;
    padding-right: 4em;
  }
  overflow: hidden;
  @media (max-width: 42rem) {
    flex-direction: column;
    & > div:first-child {
      width: 100vw;
    }
    & > div:last-child {
      width: 100vw;
      margin-top: 4em;
      padding: 2em;
    }
  }
`;

export default function Home() {
  return (
    <StyledMain>
      <Logo />
      <Info />
    </StyledMain>
  );
}
