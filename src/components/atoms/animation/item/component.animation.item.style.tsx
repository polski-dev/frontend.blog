import styled, { css } from "styled-components";

type ItemType = {
  height: number;
  last?: boolean;
};

export const Item = styled.div<ItemType>`
  width: 100%;
  opacity: 0.07;
  display: block;
  overflow: hidden;
  position: relative;
  height: ${({ height }) => `${height}rem`};
  background-color: ${({ theme }) => theme.colorText};
  margin-bottom: ${({ last, theme }) => (last ? "0" : theme.break.main)};

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
