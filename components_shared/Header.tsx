import styled from 'styled-components';
import Image from 'next/image';
// @ts-ignore
import SiteNav from '../components_shared/SiteNav.tsx';
// @ts-ignore
import SocialsNav from '../components_shared/SocialsNav.tsx';

const Wrapper = styled.section`
  background: var(--pageHeaderColor);
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
`;
const InnerWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;
const Logo = styled.span`
  display: flex;
  width: 10%;
`;

export default function Header() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo>
          <Image
            src='/images/ot1_200.png'
            alt='Owl Tactics Crypto Logo'
            width={100}
            height={100}
          />
        </Logo>
        <SocialsNav />
        <SiteNav />
      </InnerWrapper>
    </Wrapper>
  );
}
