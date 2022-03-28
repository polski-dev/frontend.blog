import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const MenuTagBox: StyledComponent<any, any> = styled.div`
  bottom: 0;
  width: 100%;
  z-index: 999;
  height: 4.5rem;
  position: fixed;
  overflow-y: scroll;
  transition: all 0.3s;
  justify-content: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }: { theme: MainSettingsTemplate }) => css`
    @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "md")].break}) {
      top: 0;
      left: 0;
      z-index: 0;
      width: auto;
      height: auto;
      bottom: auto;
      overflow: unset;
      position: relative;
      background-color: transparent;
      flex: ${(100 * 3) / theme.gridCol}%;
      max-width: ${(100 * 3) / theme.gridCol}%;
    }
  `}
`;

export const BoxImg: StyledComponent<any, any> = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-end;
  border-radius: 0.6rem;
  justify-content: center;
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorButtonBg};

  svg {
    width: 60%;
    bottom: -1rem;
    position: relative;
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
  }
`;

export const List: StyledComponent<any, any> = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &.menu {
    padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main} 0;
  }
`;

export const Item: StyledComponent<any, any> = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  padding-bottom: ${({ theme }) => theme.break.small};

  a {
    width: calc(100% - 5rem);
  }
`;

export const Quantity: StyledComponent<any, any> = styled.p`
  flex: 5rem;
  width: 5rem;
  display: flex;
  line-height: 1;
  font-size: 1.2rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
