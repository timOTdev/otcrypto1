import styled from 'styled-components';
import globals from '../data/index';
import { FcGraduationCap, FcInfo, FcStart, FcBinoculars } from 'react-icons/fc';

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
const Section = styled.section`
  text-align: left;
  width: 60%;
  margin: 6rem auto;
`;
const Aside = styled.aside`
  width: 95%;
  margin: 0 auto;
`;
const Title = styled.a`
  color: var(--desert);
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: underline;
  }
  &:hover {
    color: var(--almond);
    text-shadow: 0 0 10px var(--desert);
  }
`;

export default function links() {
  const { links } = globals();
  return (
    <Main>
      <h1>Links</h1>
      <p>
        These are all the fantastic resources I've accumulated.
        <br />
        I have not gone through all the resources but they have been
        recommended.
        <br />
        Please help spread this information to anyone interested as it's{' '}
        <em>not</em> taught in school.
        <br />
        Please reach out to me on discord for any questions and corrections.
      </p>
      <Section>
        <h2>
          <FcGraduationCap />
          &nbsp;Courses
        </h2>
        <p>{links.courses.description}</p>
        <hr />
        {links.courses.links.map((item, index) => (
          <Aside key={item.name}>
            <h3>
              <Title href={item.link ? item.link : ''}>{item.name}</Title>{' '}
            </h3>
            <p>{item.description}</p>
            {index == links.courses.linkslength - 1 ? '' : <hr />}
          </Aside>
        ))}
      </Section>
      <Section>
        <h2>
          <FcInfo />
          &nbsp;Websites
        </h2>
        <p>{links.websites.description}</p>
        <hr />
        {links.websites.links.map((item, index) => (
          <Aside key={item.name}>
            <h3>
              <Title href={item.link ? item.link : ''}>{item.name}</Title>{' '}
            </h3>
            <p>{item.description}</p>
            {index == links.websites.linkslength - 1 ? '' : <hr />}
          </Aside>
        ))}
      </Section>
      <Section>
        <h2>
          <FcStart />
          &nbsp;Youtube Channels
        </h2>
        <p>{links.youtube.description}</p>
        <hr />
        {links.youtube.links.map((item, index) => (
          <Aside key={item.name}>
            <h3>
              <Title href={item.link ? item.link : ''}>{item.name}</Title>{' '}
            </h3>
            <p>{item.description}</p>
            {index == links.youtube.linkslength - 1 ? '' : <hr />}
          </Aside>
        ))}
      </Section>
      <Section>
        <h2>
          <FcBinoculars />
          &nbsp;Earn Free Crypto
        </h2>
        <p>{links.earn.description}</p>
        <hr />
        {links.earn.links.map((item, index) => (
          <Aside key={item.name}>
            <h3>
              <Title href={item.link ? item.link : ''}>{item.name}</Title>{' '}
            </h3>
            <p>{item.description}</p>
            {index == links.earn.linkslength - 1 ? '' : <hr />}
          </Aside>
        ))}
      </Section>
    </Main>
  );
}
