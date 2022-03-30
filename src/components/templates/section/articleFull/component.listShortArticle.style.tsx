import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;
`;

export const Title: StyledComponent<any, any> = styled.h5`
  width: 100%;
  line-height: 1;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  @media all and (min-width: 768px) {
    width: 50%;
  }
`;

export const Options: StyledComponent<any, any> = styled.div`
  width: 50%;
`;

export const Article: StyledComponent<any, any> = styled.article`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 0.6rem;
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};

  .img {
    &:hover {
      opacity: 0.8;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  .titleArticle {
    width: 100%;
    display: block;
    position: relative;
  }

  .titleArticle {
    display: block;
    width: max-content;
    position: relative;
  }
`;

export const BoxContent: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  .btnMore {
    margin-left: auto;
    margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};

    @media all and (min-width: 768px) {
      margin-top: 0;
    }
  }

  .btnUser {
    margin: auto 0 auto auto;
  }

  .btnTag {
    margin: auto 0 auto auto;
  }
`;

export const BoxAuthor: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
`;

export const Content: StyledComponent<any, any> = styled.div`
  padding: 0;
  max-width: 100%;
  position: relative;

  @media all and (min-width: 768px) {
    padding: 0 4.95rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  img {
    margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
  }

  ol {
    display: block;
    margin-left: 2.8rem;
    list-style: decimal-leading-zero;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 0.6rem;
    justify-content: center;
    background-color: #404040;
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
    border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

    &::before,
    &::after {
      line-height: 0;
      font-size: 6rem;
      font-weight: bold;
      position: absolute;
    }

    &::before {
      bottom: 4rem;
      content: ",,";
      left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    &::after {
      top: 3rem;
      content: '"';
      right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    p {
      margin: 0;
      text-align: center;
    }
  }

  pre {
    p {
      font-size: 1rem;
      font-weight: bold;
      margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
      margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }
    pre {
      margin-top: 0;
      border-radius: 0.6rem;
      border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
      code {
        display: flex !important;
      }
    }
  }
`;

export const BoxCodeTitle: StyledComponent<any, any> = styled.p``;

export const BoxAuthorImg: StyledComponent<any, any> = styled.div`
  min-width: 4.2rem;
  max-width: 4.2rem;
  height: 4.2rem;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
`;

export const BoxAuthorAvatar: StyledComponent<any, any> = styled.div`
  display: none;

  @media all and (min-width: 526px) {
    min-width: 4.2rem;
    max-width: 4.2rem;
    display: flex;
    height: 4.2rem;
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    align-items: center;
    padding-top: 0.8rem;
    justify-content: center;
    border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorButtonBg};

    svg {
      height: 3.2rem;
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
    }
  }
`;

export const AuthorData: StyledComponent<any, any> = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

  a {
    width: 100%;
    display: flex;
    height: max-content;
  }
`;

export const AuthorName: StyledComponent<any, any> = styled.strong`
  width: 100%;
`;

export const DateAdded: StyledComponent<any, any> = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
`;

export const TitleArticle: StyledComponent<any, any> = styled.h1`
  display: flex;
  width: max-content;
  position: relative;

  span {
    opacity: 0.3;
  }

  @media all and (min-width: 768px) {
    padding: ${({ tag }: { tag?: boolean }): string => (tag ? "0" : "0 4.95rem")};
  }
`;

export const ListTags: StyledComponent<any, any> = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};

  @media all and (min-width: 768px) {
    padding-left: 4.95rem;
  }
`;
export const Tag: StyledComponent<any, any> = styled.li`
  width: max-content;
  position: relative;
  padding-right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

  a {
    text-transform: lowercase;
  }

  span {
    opacity: 0.3;
  }
  &::after {
    content: ",";
    opacity: 0.3;
  }

  &:last-of-type {
    &::after {
      display: none;
    }
  }
`;

export const ListStats: StyledComponent<any, any> = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media all and (min-width: 768px) {
    width: calc(100% - 8rem);
    padding-left: 4.95rem;
  }
`;

export const Item: StyledComponent<any, any> = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
  padding-right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  svg {
    height: 2rem;
    display: inline-block;
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
    padding-right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  }
`;

export const BoxInformation: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 20rem);
  padding: 0 ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const Info: StyledComponent<any, any> = styled.h4`
  max-width: 50rem;
  text-align: center;
`;

export const NotFound: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  font-size: 2.4rem;
  font-weight: bold;
  align-items: center;
  margin-bottom: 1.5rem;
  border-radius: 0.6rem;
  justify-content: center;
  height: calc(100vh - 20rem);
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
`;
