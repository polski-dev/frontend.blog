import styled, { css } from "styled-components";

export const BoxMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};

  ${({ theme }) => css`
    @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "md")].break}) {
      flex: ${(100 * 3) / theme.gridCol}%;
      max-width: ${(100 * 3) / theme.gridCol}%;
    }
  `}

  ${({ theme }) => css`
    @media all and (min-width: ${theme.breakPoint[theme.breakPoint.findIndex((item: any) => item.type === "xl")].break}) {
      flex: ${(100 * 2) / theme.gridCol}%;
      max-width: ${(100 * 2) / theme.gridCol}%;
    }
  `}
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

export const BoxState = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colorPostBg};
  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};
`;

export const DateState = styled.p`
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colorTextDesactive};
  padding-bottom: ${({ theme }) => theme.break.small};

  svg {
    height: 1.2rem;
    display: block;
    padding-right: ${({ theme }) => theme.break.small};
    fill: ${({ theme }) => theme.colorTextDesactive};
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`;
