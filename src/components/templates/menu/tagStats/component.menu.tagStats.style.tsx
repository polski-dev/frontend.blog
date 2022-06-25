import styled, { css, StyledComponent } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const MenuTagStatsBox: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: block;
  position: relative;
  background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};
  margin-top: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.big};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoxStats: StyledComponent<any, any> = styled.div`
  width: 100%;
  border-radius: 0.6rem;
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  margin-right: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorPostBg};
`;

export const List: StyledComponent<any, any> = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &.menu {
    padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  }
`;

export const Item: StyledComponent<any, any> = styled.li`
  width: 100%;
  display: flex;
  white-space: nowrap;
  color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorTextDesactive};
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};

  &:last-of-type {
    padding-bottom: 0;
  }

  span {
    opacity: 0.3;
  }

  svg {
    height: 1.4rem;
    fill: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorTextDesactive};
    margin-right: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
    path {
      stroke: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorTextDesactive} !important;
    }
  }
`;

export const Header: StyledComponent<any, any> = styled.h5`
  color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorText};
`;
