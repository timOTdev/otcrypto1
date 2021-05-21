import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
// @ts-ignore
import Header from './Header.tsx';
// @ts-ignore
import Footer from './Footer.tsx';

const GlobalStyles = createGlobalStyle`
  html {
    --grey: #3A3A3A;
    --gray: var(--grey);
    --pageHeaderColor: #1c1f21;
    --pageContentColor: #252525;
    --pageFontColor: #eeeeee;
    --lightBrown: #dcc2a8;
    --darkBrown: #694d3c;
    --maxWidth: 1000px;
    --yashi: 'Yashi', serif;
    --comfortaaL: "Comfortaa-Light", sans-serif;
    --comfortaaR: "Comfortaa-Regular", sans-serif;
    --comfortaaB: "Comfortaa-Bold", sans-serif;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: var(--comfortaaR);
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    color: var(--pageFontColor);
    line-height:2;
    background: var(--pageContentColor);
  }
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 2rem; }
  button {
    font-family: var(--comfortaaR);
  }
  a {
    color: var(---grey);
  }
  a:hover {
    text-decoration: underline;
  }
  @font-face {
    font-family: "Yashi";
    src: url("/fonts/Yashi/Yashi-Regular.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Comfortaa-Light";
    src: url("/fonts/Comfortaa/Comfortaa-Light.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Comfortaa-Regular";
    src: url("/fonts/Comfortaa/Comfortaa-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Comfortaa-Bold";
    src: url("/fonts/Comfortaa/Comfortaa-Bold.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;
const Wrapper = styled.div`
  text-align: center;
`;

export default function Page({ data, children }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}
