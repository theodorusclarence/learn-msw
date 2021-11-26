import axios from 'axios';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';

require('../mocks');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
