import styled, { css } from 'styled-components';
import {
  FaDiscord,
  FaYoutube,
  FaTwitterSquare,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import globals from '../data/index';

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;
const A = styled.a`
  &:hover {
    transform: scale(1.2);
  }
`;
const Discord = styled(FaDiscord)`
  color: #6e85d3;
`;
const Youtube = styled(FaYoutube)`
  color: #f70000;
`;
const Twitter = styled(FaTwitterSquare)`
  color: #0077b5;
`;
const Instagram = styled(FaInstagram)`
  color: white;
  border-radius: 10%;
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;
const Email = styled(FaEnvelope)`
  color: #f7c011;
`;

export default function SocialsNav() {
  const { socials } = globals();
  return (
    <Section>
      <A href={socials.discord.url} target='_blank'>
        <Discord size={30} title={socials.discord.alt} />
      </A>
      <A href={socials.youtube.url} target='_blank'>
        <Youtube size={30} title={socials.youtube.alt} />
      </A>
      <A href={socials.twitter.url} target='_blank'>
        <Twitter size={30} title={socials.twitter.alt} />
      </A>
      <A href={socials.instagram.url} target='_blank'>
        <Instagram size={30} title={socials.instagram.alt} />
      </A>
      <A href={socials.email.url} target='_blank'>
        <Email size={30} title={socials.email.alt} />
      </A>
    </Section>
  );
}
