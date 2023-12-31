import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { useRouter } from 'next/router';
import Head from 'next/head';
import store from '../store/index'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const root = router.asPath;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return(
    <>
      <Head>
        <title>CloudCustom</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Provider store={store}>
        <Header />
        <div className='d-flex pt-3'>
          {
              (root==='/' || root=='/signup')? <></>:<Sidebar />
          }
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
