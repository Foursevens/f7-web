import '@f7-web/design/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <script
          crossOrigin="anonymous"
          src="https://kit.fontawesome.com/da7aa7c212.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
