import styled, { css } from "styled-components";

export const BoxMenu = styled.div`
  top: 0;
  left: -30rem;
  width: 30rem;
  z-index: 999;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  background-color: black;
  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};

  ${({ theme }) => css`
    @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "md")].break}) {
      left: 0;
      width: auto;
      overflow: unset;
      position: relative;
      background-color: transparent;
      flex: ${(100 * 3) / theme.gridCol}%;
      max-width: ${(100 * 3) / theme.gridCol}%;
      padding: ${({ theme }) => theme.break.big} 0 ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};
    }
  `}

  ${({ theme }) => css`
    @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "xl")].break}) {
      flex: ${(100 * 2) / theme.gridCol}%;
      max-width: ${(100 * 2) / theme.gridCol}%;
    }
  `}
`;

export const BoxContent = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.break.big};
`;

export const BoxTypeContent = styled.div`
  padding-bottom: ${({ theme }) => theme.break.big};

  a {
    width: 100%;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.break.small};
  }
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
