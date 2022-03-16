import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Comment: StyledComponent<any, any> = styled.li`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const BoxCommentAvatar: StyledComponent<any, any> = styled.div`
  display: none;

  @media all and (min-width: 526px) {
    width: 4.2rem;
    display: flex;
    height: 4.2rem;
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorButtonBg};

    &::after {
      top: 0;
      left: -100%;
      content: "";
      width: 40%;
      height: 100%;
      display: block;
      position: absolute;
      animation: loadMainImgArticle 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);
    }

    @keyframes loadMainImgArticle {
      from {
        left: -100%;
      }
      to {
        left: 100%;
      }
    }
  }
`;

export const CommentContent: StyledComponent<any, any> = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  border-radius: 0.6rem;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

  @media all and (min-width: 526px) {
    max-width: calc(100% - 5.7rem);
    margin-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  }
`;
export const CommentAuthorName: StyledComponent<any, any> = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  position: relative;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  span {
    height: 1rem;
    display: block;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
      animation: loadCommentAuthorNameAndData 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);

      @keyframes loadCommentAuthorNameAndData {
        from {
          left: -100%;
        }
        to {
          left: 100%;
        }
      }
    }

    &:nth-child(1) {
      width: 10rem;
      margin-right: 1rem;
    }

    &:nth-child(2) {
      width: 5rem;
    }
  }
`;
export const CommentDescription: StyledComponent<any, any> = styled.div`
  width: 100%;
  height: 3rem;
  display: block;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    animation: loadCommentContent 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);

    @keyframes loadCommentContent {
      from {
        left: -100%;
      }
      to {
        left: 100%;
      }
    }
  }
`;
