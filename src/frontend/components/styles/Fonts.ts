import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: "${theme.fonts.extra}";
    src: url("fonts/${theme.fonts.extra}.eot");
    src: local("${theme.fonts.extra}"),
    local("${theme.fonts.extra}"),
    url("fonts/${theme.fonts.extra}.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.extra}.woff2") format("woff2"),
    url("fonts/${theme.fonts.extra}.woff") format("woff"),
    url("fonts/${theme.fonts.extra}.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-BlackItalic.eot");
    src: local("${theme.fonts.main} Black Italic"),
    local("${theme.fonts.main}-BlackItalic"),
    url("fonts/${theme.fonts.main}-BlackItalic.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-BlackItalic.ttf") format("truetype");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-Bold.eot");
    src: local("${theme.fonts.main} Bold"),
    local("${theme.fonts.main}-Bold"),
    url("fonts/${theme.fonts.main}-Bold.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-BoldItalic.eot");
    src: local("${theme.fonts.main} Bold Italic"),
    local("${theme.fonts.main}-BoldItalic"),
    url("fonts/${theme.fonts.main}-BoldItalic.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-BoldItalic.ttf") format("truetype");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-LightItalic.eot");
    src: local("${theme.fonts.main} Light Italic"),
    local("${theme.fonts.main}-LightItalic"),
    url("fonts/${theme.fonts.main}-LightItalic.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-LightItalic.ttf") format("truetype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-Regular.eot");
    src: local("${theme.fonts.main}"),
    local("${theme.fonts.main}-Regular"),
    url("fonts/${theme.fonts.main}-Regular.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-ThinItalic.eot");
    src: local("${theme.fonts.main} Thin Italic"),
    local("${theme.fonts.main}-ThinItalic"),
    url("fonts/${theme.fonts.main}-ThinItalic.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-ThinItalic.ttf") format("truetype");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-Black.eot");
    src: local("${theme.fonts.main} Black"),
    local("${theme.fonts.main}-Black"),
    url("fonts/${theme.fonts.main}-Black.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-MediumItalic.eot");
    src: local("${theme.fonts.main} Medium Italic"),
    local("${theme.fonts.main}-MediumItalic"),
    url("fonts/${theme.fonts.main}-MediumItalic.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-MediumItalic.ttf") format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-Thin.eot");
    src: local("${theme.fonts.main} Thin"),
    local("${theme.fonts.main}-Thin"),
    url("fonts/${theme.fonts.main}-Thin.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-Thin.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-Light.eot");
    src: local("${theme.fonts.main} Light"),
    local("${theme.fonts.main}-Light"),
    url("fonts/${theme.fonts.main}-Light.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-Italic.eot");
    src: local("${theme.fonts.main} Italic"),
    local("${theme.fonts.main}-Italic"),
    url("fonts/${theme.fonts.main}-Italic.eot?#iefix") format("embedded-opentype"),
    url("fonts/${theme.fonts.main}-Italic.ttf") format("truetype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "${theme.fonts.main}";
    src: url("fonts/${theme.fonts.main}-Medium.eot");
    src: local("${theme.fonts.main} Medium"),
    local("${theme.fonts.main}-Medium"),
    url("fonts/Nunito-Medium.eot?#iefix") format("embedded-opentype"),
    url("fonts/Nunito-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
`;
