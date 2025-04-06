// components/MetaPixel.js
import Script from "next/script";
import { useEffect, useState } from "react";

const META_PIXEL_ID = "1192885255702219";

export default function MetaPixel() {
  const [pixelLoaded, setPixelLoaded] = useState(false);

  useEffect(() => {
    if (pixelLoaded && typeof window.fbq !== "undefined") {
      // Inicializa e envia eventos apenas após o script carregar
      window.fbq("init", META_PIXEL_ID);
      window.fbq("track", "PageView");
      window.fbq("track", "Lead");
    }
  }, [pixelLoaded]);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        onLoad={() => setPixelLoaded(true)}
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
