import '../public/static/empty.css';
// @ts-ignore
import Page from '../components_shared/Page.tsx';
import styled from 'styled-components';

const HeaderFooterMargin = styled.div`
  margin: 3rem 0;
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <HeaderFooterMargin>
        <Component {...pageProps} />
      </HeaderFooterMargin>
    </Page>
  );
}
