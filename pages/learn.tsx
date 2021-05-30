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
const Section = styled.section`
  text-align: left;
  width: 60%;
  margin: 0 auto;
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

export default function learn() {
  const { socials, learn } = globals();
  const channelLink = socials.youtube.url;
  return (
    <Main>
      <h1>Learn</h1>
      <p>
        The best way to learn is to teach so I'm sharing everything I know.
        <br />
        Find everything on traditional finance and decentralize finance here.
        <br />
        Please help spread this information to anyone interested as it's{' '}
        <em>not</em> taught in school.
        <br />
        Please reach out to me on discord for any questions and corrections.
      </p>
      <Section>
        <h2>1.0 Introduction</h2>
        <hr />
        {learn.introduction.map((item, index) => (
          <Aside key={item.name}>
            <h3>
              <Title href={item.link ? item.link : channelLink}>
                {item.name}
              </Title>{' '}
            </h3>
            <p>{item.description}</p>
            {index == learn.introduction.length - 1 ? '' : <hr />}
          </Aside>
        ))}
      </Section>
    </Main>
  );
}
