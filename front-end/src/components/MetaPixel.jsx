// components/MetaPixel.js
import Script from "next/script";

const META_PIXEL_ID = "1192885255702219";

export default function MetaPixel() {
  return (
    <>
      {/* Script do Pixel */}
      <Script
        id="facebook-pixel-script"
        strategy="afterInteractive"
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

      {/* Evento após script estar carregado */}
      <Script
        id="facebook-pixel-events"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fbq && fbq('init', '${META_PIXEL_ID}');
            window.fbq && fbq('track', 'PageView');
            window.fbq && fbq('track', 'Lead');
          `,
        }}
      />

      {/* Fallback para navegadores sem JS */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1192885255702219&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
}
