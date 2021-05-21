import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
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
