import '../styles/globals.scss';

import Head from 'next/head';

import appConfig from '../config/app.config';
import { HTTP } from '../services/http';
import { AppPropsWithLayout } from '../types/page';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  HTTP.createClient(appConfig.apiUrl);

  return (
    <>
      <Head>
        <title>Smart UI</title>
        <meta name="description" content="Test assignment Smart UI" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
