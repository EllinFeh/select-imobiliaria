// components/MetaPixel.js
import Script from "next/script";

const META_PIXEL_ID = "1192885255702219";

export default function MetaPixel() {
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        onLoad={() => {
          if (!window.fbq) {
            window.fbq = function () {
              window.fbq.callMethod
                ? window.fbq.callMethod.apply(window.fbq, arguments)
                : window.fbq.queue.push(arguments);
            };
            if (!window._fbq) window._fbq = window.fbq;
            window.fbq.push = window.fbq;
            window.fbq.loaded = true;
            window.fbq.version = "2.0";
            window.fbq.queue = [];
          }

          // Inicializa o Pixel e envia os eventos
          window.fbq("init", META_PIXEL_ID);
          window.fbq("track", "PageView");
          window.fbq("track", "Lead"); // ← evento de lead adicionado
        }}
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
