import { MainSettingsTemplate } from "./types.mainSettingsTemplate";

const settings: MainSettingsTemplate = {
  // settings color
  colorText: "#DDDEE1",
  colorTextDesactive: "#969BA1",
  colorLink: "#E8EAED",
  colorLinkActive: "#93B3F2",
  colorMainBg: "#202024",
  colorBorder: "#5F6367",
  colorInputBg: "#303133",
  colorInputBgDark: "#202024",
  colorButtonBg: "#303134",
  colorPostBg: "#2D2E30",
  colorFooterBg: "#171717",
  colorDangerBg: "rgba(255, 0, 0, 0.1)",
  colorDangerBorder: "red",
  colorSuccessBorder: "green",
  colorSuccessBg: "rgba(0, 128, 0, 0.1)",

  // settings break
  break: { small: "0.75rem", main: "1.5rem", big: "3rem" },

  // settings breakpoint
  breakPoint: [
    { type: "xs", break: "0px" },
    { type: "sm", break: "540px" },
    { type: "md", break: "768px" },
    { type: "lg", break: "960px" },
    { type: "xl", break: "1140px" },
    { type: "xxl", break: "1320px" },
  ],

  gridCol: 12,

  // settings max width
  max_width: "128rem",
};

export default settings;
