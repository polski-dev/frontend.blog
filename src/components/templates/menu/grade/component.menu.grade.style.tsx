import styled, { css, StyledComponent } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const BoxMenu: StyledComponent<any, any> = styled.div`
  bottom: 0;
  width: 100%;
  z-index: 999;
  height: 4.5rem;
  position: fixed;
  overflow: hidden;
  transition: all 0.3s;
  justify-content: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.small} ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};
  border-top: 1px solid ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};

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
      padding: ${theme.break.big} 0 ${theme.break.big} ${theme.break.main};
    }
  `}
`;

export const BoxContent: StyledComponent<any, any> = styled.div`
  display: flex;
  position: sticky;

  @media all and (min-width: 768px) {
    flex-wrap: wrap;
    top: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.big};
  }
`;

export const Title: StyledComponent<any, any> = styled.h5`
  display: none;

  @media all and (min-width: 768px) {
    width: 100%;
    display: block;
    padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  }
`;

export const List: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;

  @media all and (min-width: 768px) {
    flex-wrap: wrap;
    padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.big};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 5rem);
    margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.small};

    svg {
      height: 1.5rem;
    }

    @media all and (min-width: 768px) {
      width: calc(100% - 8rem);

      svg {
        height: 2rem;
      }
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
  font-size: 1.2rem;
  text-align: center;
  align-items: center;
  margin-bottom: 0.75rem;
  justify-content: center;

  @media all and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
