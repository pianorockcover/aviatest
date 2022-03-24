/**
 * Tag manager initialization arguments
 */
export interface TagManagerArgs {
  /**
   * GTM id
   */
  gtmId: string;
  /**
   * Custom GTM server URL
   */
  gmtServerUrl?: string;
  /**
   * Additional events such as 'gtm.start': new Date().getTime(),event:'gtm.js'.
   */
  events?: object | undefined;
  /**
   * Used to set environments.
   */
  auth?: string | undefined;
  /**
   * Used to set environments, something like env-00.
   */
  preview?: string | undefined;
  /**
   * Contains information to pass to GTM
   */
  dataLayer?: object | undefined;
  /**
   * Custom name for dataLayer object.
   */
  dataLayerName?: string | undefined;
}

export type DataLayerPushArgs = Pick<TagManagerArgs, "dataLayer">;
