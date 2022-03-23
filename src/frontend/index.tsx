import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import { TagManager } from "./gtm/TagManager";

const tagManagerArgs = {
  gtmId: "GTM-000000",
  dataLayer: {
    f: 1,
    f2: 3,
  },
  dataLayerName: "dataLayertest",
};

TagManager.dataLayer({
  dataLayer: { g: 4 },
});
TagManager.initialize(tagManagerArgs);

render(<App />, document.body);
