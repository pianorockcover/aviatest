import { TagManagerArgs } from "./interfaces";

type GenerateSnippetsReturnValue = {
  /**
   * Element for <iframe> snippet
   */
  iframeSnippet: HTMLElement;
  /**
   * Element for <script> snippet
   */
  scriptSnippet: HTMLScriptElement;
};

/**
 * Generates GTM customized snippets
 *
 * @param {TagManagerArgs} params GTM parameters like id, events, server url, etc
 * @returns {GenerateSnippetsReturnValue} html elements for snippets
 */
export const generateSnippets = ({
  gtmId,
  auth,
  dataLayerName,
  events,
  gmtServerUrl,
  preview,
}: TagManagerArgs): GenerateSnippetsReturnValue => {
  const gtmAuth = `&gtm_auth=${auth}`;
  const gtmPreview = `&gtm_preview=${preview}`;

  const iframe = `
      <iframe src="${gmtServerUrl}/ns.html?id=${gtmId}${gtmAuth}${gtmPreview}&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`;

  const iframeSnippet = document.createElement("noscript");
  iframeSnippet.innerHTML = iframe;

  const mainScript = `
      (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${JSON.stringify(
          events
        ).slice(1, -1)}});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='${gmtServerUrl}/gtm.js?id='+i+dl+'${gtmAuth}${gtmPreview}&gtm_cookies_win=x';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','${dataLayerName}','${gtmId}');`;

  const scriptSnippet = document.createElement("script");
  scriptSnippet.innerHTML = mainScript;

  return {
    iframeSnippet,
    scriptSnippet,
  };
};
