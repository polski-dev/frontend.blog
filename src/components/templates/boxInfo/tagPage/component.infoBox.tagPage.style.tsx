import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const InfoBoxTag: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: block;
  position: relative;
  border-radius: 0.6rem;
  margin-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
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

export const Title: StyledComponent<any, any> = styled.h1`
  width: 100%;
  display: block;
  height: max-content;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};

  span {
    opacity: 0.3;
  }
`;
export const Description: StyledComponent<any, any> = styled.p`
  width: 100%;
  text-align: ${({ description }: { description?: boolean }) => (description ? "left" : "center")};
`;
