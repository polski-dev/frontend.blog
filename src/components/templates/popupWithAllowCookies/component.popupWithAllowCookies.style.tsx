import styled from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Popup = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  display: block;
  position: fixed;
  z-index: 999999;
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.big} 0;
  background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};
  border-top: 1px solid ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};

  p,
  a {
    font-size: 1.2rem;
  }

  a {
    font-weight: bold;
  }

  button {
    width: 100%;
    font-weight: bold;
    margin: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main} 0;
  }
`;
