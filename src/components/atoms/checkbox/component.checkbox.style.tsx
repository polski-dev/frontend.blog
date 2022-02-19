import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

interface LabelProps {
  checkedInput: boolean;
}

export const Label: StyledComponent<any, any> = styled.label<LabelProps>`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
`;

export const CheckBoxClassicRoad: StyledComponent<any, any> = styled.div`
  flex: 0 60px;
  width: 60px;
  height: 36px;
  display: block;
  transition: 0.5s;
  position: relative;
  border-radius: 3rem;
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>) => theme.colorMainBg};
  border: ${({ theme, error, checkedInput }: { theme: MainSettingsTemplate; error: boolean; checkedInput: boolean }): string =>
    checkedInput ? `1px solid ${theme.colorSuccessBorder}` : error && !checkedInput ? `1px solid ${theme.colorDangerBorder}` : `1px solid ${theme.colorBorder}`};
`;

export const CheckBoxClassicFace: StyledComponent<any, any> = styled.i`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  transition: 0.5s;
  border-radius: 50%;

  ${({ theme, checkedInput, error }: { theme: MainSettingsTemplate; error: boolean; checkedInput: boolean }) =>
    checkedInput
      ? css`
          left: 28px;
          background: ${theme.colorSuccessBorder};
        `
      : error && !checkedInput
      ? css`
          left: 4px;
          background: ${theme.colorDangerBorder};
        `
      : css`
          background: ${theme.colorBorder};
        `}

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>) => theme.colorMainBg};
    box-shadow: 12px 0 0 ${({ theme }: ThemeProps<MainSettingsTemplate>) => theme.colorMainBg};
    transition: 0.5s;
  }

  &::after {
    content: "";
    bottom: 6px;
    width: 12px;
    height: 4px;
    transition: 0.5s;
    position: absolute;
    left: calc(50% - 6px);
    border-radius: 0.6rem;
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>) => theme.colorMainBg};

    ${({ checkedInput }: { checkedInput: boolean }) =>
      !!checkedInput &&
      css`
        bottom: 2px;
        height: 8px;
        border-radius: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      `}
  }
`;

export const CheckBoxClassicText: StyledComponent<any, any> = styled.p`
  display: block;
  font-size: 1rem;
  position: relative;
  transition: all 0.3s;
  flex: calc(100% - 6rem);
  max-width: calc(100% - 6rem);
  padding: 0 ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
`;

export const CheckBoxStyled: StyledComponent<any, any> = styled.input`
  display: none;
`;
