export type MainSettingsTemplate = {
  colorText: string;
  colorPostBg: string;
  colorTextDesactive: string;
  colorLink: string;
  colorLinkActive: string;
  colorMainBg: string;
  colorBorder: string;
  colorInputBg: string;
  colorInputBgDark: string;
  colorButtonBg: string;
  colorFooterBg: string;
  colorDangerBg: string;
  colorDangerBorder: string;
  colorSuccessBorder: string;
  colorSuccessBg: string;

  break: { small: string; main: string; big: string };
  breakPoint: { type: string; break: string }[];
  gridCol: number;
  max_width: string;
};
