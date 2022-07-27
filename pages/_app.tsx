import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useEffect, useMemo, useState } from "react";
import { AppContext } from "../components/hooks/AppContext.hook";
import useImagePreloader from "../components/hooks/useImagePreloader";
import { preloadSrcList } from "../components/constants/imagePreload";

function MyApp({ Component, pageProps }: AppProps) {
  const [display, setDisplay] = useState({
    modal: false,
    navMenu: false,
  });

  const displayValue = useMemo(
    () => ({ display, setDisplay }),
    [display, setDisplay]
  );

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.ts").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  if (imagesPreloaded) return;
  return (
    <AppContext.Provider value={displayValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
