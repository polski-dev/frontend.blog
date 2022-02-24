import styled, { css, StyledComponent } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const BoxMenu: StyledComponent<any, any> = styled.div`
  top: 0;
  width: 30rem;
  z-index: 999;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  transition: all 0.3s all;
  left: 0;
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};

  ${({ theme }: { theme: MainSettingsTemplate }) => css`
    @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "md")].break}) {
      left: 0;
      z-index: 0;
      width: auto;
      height: auto;
      overflow: unset;
      position: relative;
      background-color: transparent;
      flex: ${(100 * 3) / theme.gridCol}%;
      max-width: ${(100 * 3) / theme.gridCol}%;
      padding: ${theme.break.big} 0 ${theme.break.big} ${theme.break.main};
    }
  `}
`;

export const BoxContent: StyledComponent<any, any> = styled.div`
  display: block;
  position: sticky;
  top: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.big};
`;

export const List: StyledComponent<any, any> = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.big};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 8rem);
    margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.small};
    svg {
      height: 2rem;
    }
  }
`;

export const Item: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
`;

export const Quantity: StyledComponent<any, any> = styled.div`
  flex: 5rem;
  width: 5rem;
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 0.75rem;
  justify-content: center;
`;

export const Title: StyledComponent<any, any> = styled.h5`
  width: 100%;
  display: block;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
`;
