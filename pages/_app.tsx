import { useEffect } from 'react';
import Layout from '../components/Layout';

// global _app.scss
import '../styles/_app.scss';
import 'flickity/css/flickity.css';
import 'react-h5-audio-player/src/styles.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener('contextmenu', _preventDefault);

    return () => {
      window.removeEventListener('contextmenu', _preventDefault);
    };
  }, []);

  const _preventDefault = (event: Event) => event.preventDefault();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
