import { defaultDataLayerName, defaultGtmServerUrl } from "./constants";
import { generateSnippets } from "./generateSnippets";
import { DataLayerPushArgs, TagManagerArgs } from "./interfaces";

/**
 * Class for managing GTM snippets and dataLayers.
 * Mimics behavior of npm package react-gtm-module.
 */
export class TagManager {
  private static dataLayerName?: string;

  /**
   * Adds GTM snippets to page and initializes a dataLayer variable
   *
   * @param {TagManagerArgs} params initialization params, GTM id, server URL, etc
   * @returns {void}
   */
  static initialize({
    auth,
    dataLayer,
    dataLayerName = defaultDataLayerName,
    events,
    gmtServerUrl = defaultGtmServerUrl,
    gtmId,
    preview,
  }: TagManagerArgs): void {
    if (TagManager.dataLayerName) {
      console.warn("You cannot initialize GTM more than once per page");

      return;
    }

    TagManager.dataLayerName = dataLayerName;

    window[TagManager.dataLayerName] = dataLayer ? [dataLayer] : [];

    const { iframeSnippet, scriptSnippet } = generateSnippets({
      gtmId,
      gmtServerUrl,
      events,
      dataLayerName: TagManager.dataLayerName,
      auth,
      preview,
    });

    document.head.insertBefore(scriptSnippet, document.head.childNodes[0]);
    document.body.insertBefore(iframeSnippet, document.body.childNodes[0]);
  }

  /**
   * Pushes data to GTM
   *
   * @param {DataLayerPushArgs} params dataLayer objcet
   * @returns {void}
   */
  static dataLayer({ dataLayer }: DataLayerPushArgs): void {
    if (!TagManager.dataLayerName) {
      console.warn("Inialize TagManager before push something to dataLayer");

      return;
    }

    window[TagManager.dataLayerName] = window[TagManager.dataLayerName] || [];
    window[TagManager.dataLayerName].push(dataLayer);
  }
}
