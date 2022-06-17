import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Circle: StyledComponent<any, any> = styled.div`
  width: ${({ size }: { size: number }) => `${size}rem`};
  height: ${({ size }: { size: number }) => `${size}rem`};
  border: solid 0.3rem ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorBorder};
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  -webkit-transition: all 0.5s ease-in;
  -webkit-animation-name: rotate;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  transition: all 0.5s ease-in;
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
