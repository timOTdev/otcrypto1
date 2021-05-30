import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link rel='shortcut icon' href='images/ot2_50.ico' />
          <link
            rel='preload'
            href='/fonts/Yashi/Yashi-Regular.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Comfortaa/Comfortaa-Light.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Comfortaa/Comfortaa-Regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Comfortaa/Comfortaa-Bold.ttf'
            as='font'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
