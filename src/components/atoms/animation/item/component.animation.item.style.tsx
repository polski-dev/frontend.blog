import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

interface ItemType {
  height?: number;
}

export const Item = styled.div<ItemType>`
  width: 100%;
  opacity: 0.07;
  overflow: hidden;
  position: relative;
  display: inline-block;
  height: ${({ height }: { height?: number }) => (height ? `${height}rem` : `1.6rem`)};
  background-color: ${({ theme }: { mode?: string; theme: MainSettingsTemplate }): string => theme.colorText};

  &::after {
    top: 0;
    left: -100%;
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    position: absolute;
    animation: loadArticleText 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);
  }

  @keyframes loadArticleText {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;
