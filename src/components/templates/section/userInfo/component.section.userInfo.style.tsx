import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "styles/types.mainSettingsTemplate";

export const UserInfoBox: StyledComponent<any, any> = styled.div`
  top: -4rem;
  width: 100%;
  display: flex;
  position: relative;
  min-height: 25.5rem;
  border-radius: 0.6rem;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostBg};

  .btn {
    top: 5rem;
    right: calc(50% - 5.1rem);
    position: absolute;

    @media all and (min-width: 520px) {
      top: 1.5rem;
      right: 1.5rem;
    }
  }
`;

export const Avatar: StyledComponent<any, any> = styled.div`
  width: 10rem;
  height: 10rem;
  top: -4.25rem;
  overflow: hidden;
  position: absolute;
  border-radius: 100%;
  left: calc(50% - 4.25rem);
  border: 1.5rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostBg};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};

  svg {
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
  }
`;

export const Name: StyledComponent<any, any> = styled.h3`
  width: 100%;
  padding-top: 7rem;
  text-align: center;

  @media all and (min-width: 520px) {
    padding-top: 4rem;
  }
`;

export const Description: StyledComponent<any, any> = styled.p`
  width: 100%;
  text-align: center;
  padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const List: StyledComponent<any, any> = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const Item: StyledComponent<any, any> = styled.li`
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small} 0;
  color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextDesactive};

  @media all and (min-width: 760px) {
    width: 50%;
  }

  @media all and (min-width: 1280px) {
    width: max-content;
  }

  svg {
    height: 1.2rem;
    fill: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextDesactive};
    margin: 0 ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small} 0 ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  }
`;
