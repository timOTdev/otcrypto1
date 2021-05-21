import styled from 'styled-components';
import SocialsNav from './SocialsNav';
import SiteNav from './SiteNav';

const Wrapper = styled.footer`
  background: var(--pageHeaderColor);
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 -8px 6px -6px black;
  position: relative;
  bottom: 0;
`;
const InnerWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 2rem 0;
`;
const FooterText = styled.div`
  font-size: 2rem;
  width: 50%;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <FooterText>
        Owl Tactics Crypto does not provide financial advice. The financial
        opinions expressed are for information purposes only.&nbsp; Please seek
        professional counsel for your financial imperatives. <br />
      </FooterText>
      <InnerWrapper>
        <SocialsNav />
        <SiteNav />
      </InnerWrapper>
      <FooterText>Updated May {new Date().getFullYear()}</FooterText>
    </Wrapper>
  );
}