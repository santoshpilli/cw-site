import { useEffect } from 'react';
import { initGA, logPageView } from '../components/common/analytics'

import "../styles/globals.css";
import "../styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />  
  </>
  )

}

export default MyApp;