import styled from 'styled-components';

const Main = styled.main`
  margin: 5rem 0;
`;
const H1 = styled.h1`
  font-family: 'Yashi';
  font-weight: 400;
  color: var(--darkBrown);
  text-shadow: 1px 4px 2px var(--lightBrown);
  font-size: 6rem;
  margin: 0;
`;
const P = styled.p`
  margin: 0;
  font-family: var(--comfortaaB);
`;

const Announcements = () => {
  return (
    <Main>
      <H1>Owl Tactics Crypto</H1>
      <P>Seeking wisdom in the new financial epoch</P>
    </Main>
  );
};

export default Announcements;
