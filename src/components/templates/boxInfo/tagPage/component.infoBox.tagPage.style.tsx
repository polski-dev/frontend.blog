import styled, { StyledComponent } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const InfoBoxTag: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: block;
  position: relative;
  border-radius: 0.6rem;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  margin-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostBg};

  .btn {
    left: 1.5rem;
    position: absolute;
    top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};

    @media all and (min-width: 520px) {
      top: 2rem;
      left: auto;
      right: 1.5rem;
    }
  }
`;

export const Title: StyledComponent<any, any> = styled.h1`
  width: 100%;
  display: block;
  height: max-content;
  margin-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};

  @media all and (min-width: 520px) {
    margin-top: 0;
    line-height: 1;
  }

  span {
    opacity: 0.3;
  }
`;
export const Description: StyledComponent<any, any> = styled.p`
  width: 100%;
  text-align: ${({ description }: { description?: boolean }) => (description ? "left" : "center")};
`;
