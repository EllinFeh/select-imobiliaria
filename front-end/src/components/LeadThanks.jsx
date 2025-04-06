// components/MetaPixelLead.js
import Script from "next/script";

const META_PIXEL_ID = "1192885255702219";

export default function MetaPixelLead() {
  return (
    <>
      <Script
        id="facebook-pixel-lead"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fbq && fbq('track', 'Lead');
          `,
        }}
      />
    </>
  );
}
