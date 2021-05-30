import styled from 'styled-components';
import globals from '../data/index';

const Main = styled.main`
  width: 60%;
  margin: 3rem auto;
`;
const Deals = styled.section`
  width: 60%;
  margin: 0 auto;
  text-align: left;
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
const Offer = styled.span`
  font-style: italic;
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

export default function deals() {
  const { deals } = globals();
  return (
    <Main>
      <h1>Deals</h1>
      <p>
        The following links provided are affiliate links.
        <br />
        They help support the brand without any cost to you if you decide to
        participate.
        <br />
        These services are ones I have personally used and recommend.
        <br />
        Please reach out to me on discord if you want a demo or have questions.
      </p>
      {deals.map((item, index) => (
        <Deals key={item.name}>
          <h2>
            <Title href={item.link}>{item.name}</Title>{' '}
          </h2>
          <p key={item.description}>
            <Offer>{item.offer}</Offer>
          </p>
          <p>{item.description}</p>
          <Expand>
            <a href={item.link} target='_blank'>
              <button>Get {item.name} Deal</button>
            </a>
          </Expand>
          {index == deals.length - 1 ? '' : <hr />}
        </Deals>
      ))}
    </Main>
  );
}
