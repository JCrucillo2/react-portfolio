import "../styles/globals.css";
import { useEffect } from "react";

// AOS Library
import Aos from "aos";
import "aos/dist/aos.css";

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

      duration: 1500,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
