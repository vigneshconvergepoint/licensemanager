import {
  FluentProvider,
  Theme,
  webLightTheme,
} from "@fluentui/react-components";
import * as React from "react";

export const UiWrapper = (props: any) => {
  const [theme, setTheme] = React.useState<
    Theme & {
      btnMediumHeight: string;
      grayColor900: string;
      grayColor600: string;
      grayColor450: string;
      grayColor300: string;
      grayColor200: string;
      grayColor150: string;
      grayColor100: string;
      grayColor50: string;

      success600: string;
      success100: string;

      error600: string;
      error100: string;
      error50: string;

      warning600: string;
      warning100: string;

      ceruleanBlue: string;

      yellow600: string;
      yellow100: string;
      info600 : string;
      info100 : string;
      white: string;
      white700: string;
      white300: string;
      white100: string;
      inputMinHeight: string;
      bannerBackgroundColor: string;
      borderRadius16: string;
      smallShadow: string;
    }
  >();

  React.useEffect(() => {
    getTheme();
  }, []);

  const hexToHexOpacity = (hex: string, opacity: number) => {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return `#${Math.round(r).toString(16).padStart(2, "0")}${Math.round(g)
      .toString(16)
      .padStart(2, "0")}${Math.round(b)
      .toString(16)
      .padStart(2, "0")}${Math.round(opacity * 255)
      .toString(16)
      .padStart(2, "0")}`;
  };

  const getTheme = async () => {
    let primaryColor = "#F25022"
    let navColor = "#002335"

    let brandColors = {
      navBackgroundColor: navColor,
      colorNeutralForeground2BrandPressed: "#212529",
      colorNeutralForeground2BrandHover: "#646B72",
      colorNeutralStrokeAccessible: "#ADB5BD",
      fontFamilyBase: "'Manrope', sans-serif",
      fontFamilyMonospace: "'Manrope', monospace",
      fontFamilyNumeric: "'Manrope', sans-serif",
    };
    let opacity = [1, 0.8, 0.44, 0.1, 0.05];
    let brandWeight = [600, 500, 400, 100, 50];
    opacity.map((num, index) => {
      const hex = hexToHexOpacity(primaryColor, num);
      brandColors[`brandColor${brandWeight[index]}`] = hex;
      if (num === 0.05) {
        brandColors[`colorBrandBackgroundHover`] = hex;
        brandColors[`colorBrandBackground2`] = hex;
        brandColors[`colorBrandBackgroundInvertedSelected`] = hex;
      } else if (num === 0.1) {
        brandColors[`colorBrandStroke2`] = hex;
      } else if (num === 0.8) {
        brandColors[`colorBrandBackgroundPressed`] = hex;
        brandColors[`colorCompoundBrandBackgroundPressed`] = hex;
        brandColors[`colorCompoundBrandForeground1Pressed`] = hex;
        brandColors[`colorBrandForegroundLinkPressed`] = hex;
      } else if (num === 1) {
        brandColors[`colorBrandBackground`] = hex;
        brandColors[`colorCompoundBrandBackgroundHover`] = hex;
        brandColors["colorCompoundBrandBackground"] = hex;
        brandColors["colorCompoundBrandForeground1"] = hex;
        brandColors["colorCompoundBrandStroke"] = hex;
        brandColors["colorCompoundBrandForeground1Hover"] = hex;
        brandColors["colorCompoundBrandStrokeHover"] = hex;
        brandColors[`colorBrandStroke1`] = hex;
        brandColors[`colorBrandForegroundLink`] = hex;
        brandColors[`colorBrandForegroundLinkHover`] = hex;
      }
    });

    setTheme({
      ...webLightTheme,
      ...brandColors,
      btnMediumHeight: "36px",
      grayColor900: "#212529",
      grayColor600: "#646B72",
      grayColor450: "#8E99A4",
      grayColor300: "#ADB5BD",
      grayColor200: "#DEE2E6",
      grayColor150: "#E8EAEC",
      grayColor100: "#F5F5F5",
      grayColor50: "#FAFAFA",

      success600: "#00984F",
      success100: "#F0F9F5",

      error600: "#E14640",
      error100: "#FDF0F0",
      error50: "#FEF6F6",

      warning600: "#ED7D2C",
      warning100: "#FFF6EF",

      yellow600: "#FFBD2E",
      yellow100: "#FFFAEE",

      info600: "#3A8DE6",
      info100: "#F0F8FF",

      ceruleanBlue: "#1E5396",

      white: "#FFFFFF",
      white700: "#ffffffb8",
      white300: "#ffffff52",
      white100: "#ffffff29",
      inputMinHeight: "40px",
      bannerBackgroundColor: "#CA4B36",
      borderRadius16: "16px",
      smallShadow : "0px 2px 2px rgba(33, 37, 41, 0.08)",
    });
  };

  return <FluentProvider theme={theme}>{props.children}</FluentProvider>;
};
