// @ts-ignore
import Image from 'next/image';
import styled from 'styled-components';
import globals from '../data/index';

const Main = styled.main`
  h1 {
    font-family: 'Yashi';
    font-weight: 400;
    color: var(--titleText);
    text-shadow: var(--titleTextShadow);
    font-size: 6rem;
    margin: 0;
  }
`;
const InnerWrapper = styled.section`
  width: 60%;
  margin: 0 auto;
`;
const Img = styled(Image)`
  max-width: 80%;
  border-radius: 3px;
`;
const Div = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: left;
`;
const Signature = styled.p`
  font-family: cursive;
`;

export default function about() {
  const { about } = globals();
  return (
    <Main>
      <h1>About</h1>
      <InnerWrapper>
        <Img
          src='/images/gto.jpg'
          alt='About Picture'
          width={1920}
          height={960}
        />
        <Div>
          {about.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Div>
        <p>Tim with OTC</p>
      </InnerWrapper>
    </Main>
  );
}
