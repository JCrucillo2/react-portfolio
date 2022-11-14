import "../styles/globals.css";
import { useEffect } from "react";

// AOS Library
import Aos from "aos";
import "aos/dist/aos.css";

// Google Analytics
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassName: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0SZJGN7BX4`}
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-0SZJGN7BX4');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
