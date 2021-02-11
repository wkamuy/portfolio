declare global {
  interface Window {
    gtag: Gtag.Gtag;
  }
}

export const GA_ID = 'G-CM0D9TMCT7';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initializeGA = (measurementId: string) => {
  // load gtag.js:  https://developers.google.com/analytics/devguides/collection/gtagjs
  const script1 = document.createElement('script');
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script1.async = true;
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.text = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');`;
  document.body.appendChild(script2);
};
