import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Create script elements
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-NX8X407LJR';

    const dataLayerScript = document.createElement('script');
    dataLayerScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NX8X407LJR');
    `;

    // Append scripts to head
    document.head.appendChild(gtagScript);
    document.head.appendChild(dataLayerScript);

    // Cleanup
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(dataLayerScript);
    };
  }, []);

  return null;
}
