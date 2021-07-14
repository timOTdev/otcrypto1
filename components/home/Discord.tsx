import styled from 'styled-components';
import globals from '../../data/index';

const Main = styled.main`
  background: linear-gradient(
    0deg,
    var(--horses) 42%,
    var(--desert) 46%,
    var(--horses) 55%
  );
`;
const Section = styled.section`
  width: 30%;
  margin: 0 auto;
  text-align: center;
`;
const A = styled.a`
  &:hover {
    background: none;
  }
`;
const Img = styled.img`
  width: 150px;
  &:hover {
    transform: scale(1.03);
    transition: all 1s ease;
  }
`;
const P = styled.p`
  font-family: var(--comfortaaB);
`;
const Ul = styled.ul`
  text-align: left;
`;
const Expand = styled.div`
  text-align: center;
  a {
    color: var(--desert);
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
    &:hover {
      background: var(--almond);
      color: var(--almond);
      text-shadow: 0 0 10px var(--desert);
    }
  }
`;

const Discord = () => (
  <Main>
    <Section>
      <h1>Community</h1>
      <A href={globals().socials.discord.url} target='_blank'>
        <Img src='/images/discord.png' alt='discord logo' />
      </A>
      <Ul>
        <li>Connect with like-minded people to share knowledge</li>
        <li>Find out when new videos drop on the youtube channels</li>
        <li>Meet new bilingual friends who speak English and Spanish</li>
      </Ul>
      <Expand>
        <a href='https://discord.gg/9WjKnh' target='_blank'>
          <button>The Nydus Discord</button>
        </a>
      </Expand>
    </Section>
  </Main>
);

export default Discord;
