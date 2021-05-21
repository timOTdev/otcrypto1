import styled from 'styled-components';
import globals from '../../data/index';

const Main = styled.main`
  padding: 5rem 0;
  width: 30%;
  margin: 0 auto;
  text-align: center;
  color: white;
`;
const Img = styled.img`
  width: 150px;
`;
const P = styled.p`
  font-family: var(--comfortaaB);
`;
const Ul = styled.ul`
  text-align: left;
`;

const Discord = () => (
  <Main>
    <a href={globals().socials.discord.url} target='_blank'>
      <Img src='/images/discord.png' alt='discord logo' />
    </a>
    <P>Want to plug into the community?</P>
    <Ul>
      <li>Connect with like-minded people to share knowledge</li>
      <li>Find out when new videos drop on the youtube channels</li>
      <li>Meet new bilingual friends who speak English and Spanish</li>
    </Ul>
    <a href='https://discord.gg/9WjKnh' target='_blank'>
      The Nydus Discord
    </a>
  </Main>
);

export default Discord;
