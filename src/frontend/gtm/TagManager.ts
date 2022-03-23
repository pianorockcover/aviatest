import { defaultDataLayerName, defaultGtmServerUrl } from "./constants";
import { generateSnippets } from "./generateSnippets";
import { DataLayerArgs, TagManagerArgs } from "./interfaces";

/**
 * Class for managing GTM snippets and dataLayers.
 * Mimics behavior of npm package react-gtm-module.
 */
export class TagManager {
  private static initialized?: boolean;

  /**
   * Adds GTM snippets to page and adds dataLayer property to window
   *
   * @param {TagManagerArgs} params initialization params, GTM id, server URL, etc
   * @returns {void}
   */
  static initialize({
    gtmId,
    gmtServerUrl = defaultGtmServerUrl,
    events = {},
    dataLayer,
    dataLayerName = defaultDataLayerName,
    auth = "",
    preview = "",
  }: TagManagerArgs): void {
    if (TagManager.initialized) {
      console.warn("You cannot initialize GTM more than once per page");

      return;
    }

    window[dataLayerName] = dataLayer ? [dataLayer] : [];

    const { iframeSnippet, scriptSnippet } = generateSnippets({
      gtmId,
      gmtServerUrl,
      events,
      dataLayerName,
      auth,
      preview,
    });

    document.head.insertBefore(scriptSnippet, document.head.childNodes[0]);
    document.body.insertBefore(iframeSnippet, document.body.childNodes[0]);

    TagManager.initialized = true;
  }

  // TODO: один дата лейер????
  /**
   * Passes data to datalayer
   *
   * @param {DataLayerArgs} params dataLayer and dataLayerName
   * @returns {void}
   */
  static dataLayer({
    dataLayerName = defaultDataLayerName,
    dataLayer,
  }: DataLayerArgs): void {
    if (!TagManager.initialized) {
      console.warn("Inialize TagManager before push something to dataLayer");

      return;
    }

    window[dataLayerName] = window[dataLayerName] || [];
    window[dataLayerName].push(dataLayer);
  }
}
