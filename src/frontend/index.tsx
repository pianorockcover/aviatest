import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import { TagManager } from "./gtm/TagManager";

TagManager.initialize({
  gtmId: "GTM-000000",
  dataLayer: {
    f: 1,
    f2: 3,
  },
  dataLayerName: "dataLayertest",
  gmtServerUrl: "https://gtm.propertyscout.co.th",
});

TagManager.dataLayer({
  dataLayer: { g: 4 },
});

render(<App />, document.body);
