import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.break.small} 0;
  background: ${({ theme }) => theme.colorMainBg};
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
`;

export const Logo = styled.div`
  order: 0;
  flex: 50%;
  display: flex;
  max-width: 50%;
  cursor: pointer;
  width: max-content;
  position: relative;
  align-items: center;
  padding: 0 ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    flex: auto;
    order: unset;
    max-width: max-content;
  }

  a {
    display: flex;
  }

  svg {
    height: 2rem;
    fill: ${({ theme }) => theme.colorLink};
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colorLinkActive};
    }
  }
`;

export const SerachBox = styled.div`
  order: 2;
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    margin: 0 0;
    flex: 400px;
    width: 400px;
    order: unset;
  }
`;

export const UserPanelBox = styled.div`
  order: 0;
  flex: 50%;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  padding: 0 ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    flex: auto;
    order: unset;
    margin-left: 0;
  }
`;

export const Menu = styled.ul`
  order: 3;
  flex: 100%;
  width: 100%;
  display: flex;
  bottom: -0.77rem;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: ${({ theme }) => theme.break.big};

  &::-webkit-scrollbar {
    display: none;
  }

  @media all and (min-width: 768px) {
    order: 1;
    flex: auto;
    padding-top: 0;
    overflow-y: auto;
    margin-left: 19.5rem;
  }
`;

type ItemType = {
  active: boolean;
};

export const Item = styled.li<ItemType>`
  a {
    display: block;
    font-size: 1.2rem;
    white-space: nowrap;
    text-decoration: solid;
    cursor: ${({ theme, active }) => (active ? "no-drop" : "pionier")};
    padding: ${({ theme }) => theme.break.small} ${({ theme }) => theme.break.main};
    color: ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorLink)};
    border-bottom: 1px solid ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorBorder)};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colorLinkActive};
    }

    svg {
      top: 0.1rem;
      height: 1.2rem;
      position: relative;
      margin-right: 0.3rem;
      fill: ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorLink)};
    }
  }
`;
