import styled, { css, createGlobalStyle } from "styled-components";

type PowerType = {
  power: boolean;
  mode?: string;
};

export const GlobalStyle = createGlobalStyle<PowerType>`
body{
  overflow: ${({ power }) => (power ? "hidden" : "unset")};
}
`;

export const Bg = styled.div<PowerType>`
  top: 0;
  left: 0;
  z-index: 888;
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(3px);
  display: ${({ power }) => (power ? "block" : "none")};
`;

export const BoxMenu = styled.div<PowerType>`
  top: 0;
  width: 30rem;
  z-index: 999;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  transition: all 0.3s all;
  left: ${({ power }) => (power ? "0rem" : "-30rem")};
  background-color: ${({ theme, mode }) => theme.colorMainBg};
  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};

  ${({ theme }) => css`
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
      padding: ${({ theme }) => theme.break.big} 0 ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};
    }
  `}
`;

export const BoxContent = styled.div`
  display: block;
  position: sticky;
  top: ${({ theme }) => theme.break.big};
`;

export const OffMenu = styled.button`
  padding: 0;
  border: none;
  height: 2rem;
  width: 2.5rem;
  display: block;
  cursor: pointer;
  position: absolute;
  transition: all 0.3s all;
  background-color: transparent;
  top: ${({ theme }) => theme.break.main};
  left: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    display: none;
  }

  span {
    width: 100%;
    top: 0.75rem;
    display: block;
    height: 0.2rem;
    position: absolute;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.colorLink};

    &:nth-child(1) {
      right: 0;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      left: 0;
      transform: rotate(-45deg);
    }
  }

  &:hover {
    span {
      background-color: ${({ theme }) => theme.colorLinkActive};
    }
  }
`;

export const FiltrListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${({ theme }) => theme.break.big};

  a {
    text-align: center;
    width: calc(100% - 8rem);
    margin-bottom: ${({ theme }) => theme.break.small};
  }
`;

export const FiltrListContentItem = styled.div`
  width: 100%;
  display: flex;
`;

export const BoxTypeContentQuantity = styled.div`
  flex: 5rem;
  width: 5rem;
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 0.75rem;
  justify-content: center;
`;

export const Title = styled.h5`
  width: 100%;
  display: block;
  padding-bottom: ${({ theme }) => theme.break.main};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: ${({ theme }) => theme.break.big};
`;

export const Tag = styled.li`
  width: 100%;
  position: relative;
  padding-bottom: ${({ theme }) => theme.break.small};

  a {
    span {
      opacity: 0.3;
    }
  }
`;

export const SocialMedia = styled.li`
  display: block;
  position: relative;
  width: max-content;
  padding-right: ${({ theme }) => theme.break.main};
  a {
    svg {
      height: 1.5rem;
    }
  }
`;
