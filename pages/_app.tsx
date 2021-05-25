// @ts-ignore
import Page from '../components_shared/Page.tsx';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
