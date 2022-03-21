import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Comments = styled.div``;

export const BoxComments: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  border-top: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
`;

export const BoxCommentsTitle: StyledComponent<any, any> = styled.h5`
  flex: 100%;
  max-width: 100%;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
`;

export const Form: StyledComponent<any, any> = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  label {
    width: 100%;
    margin-top: 0;

    @media all and (min-width: 526px) {
      max-width: calc(100% - 5.7rem);
      margin-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
    }
  }

  button {
    margin-left: auto;
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

    svg {
      height: 3.2rem;
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
    }
  }
`;

export const ListComments: StyledComponent<any, any> = styled.ul`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
`;

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

export const CommentAuthorName: StyledComponent<any, any> = styled.h6`
  flex: 100%;
  display: block;
  max-width: 100%;
  position: relative;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  span {
    font-size: 1.2rem;
    font-weight: normal;
    ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
  }
`;

export const CommentDescription: StyledComponent<any, any> = styled.p`
  flex: 100%;
  display: block;
  max-width: 100%;
  text-align: left;
  position: relative;
`;

export const BoxAuthorAvatar: StyledComponent<any, any> = styled.div`
  display: none;

  @media all and (min-width: 526px) {
    width: 4.2rem;
    display: flex;
    height: 4.2rem;
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    align-items: center;
    padding-top: 0.8rem;
    justify-content: center;
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorButtonBg};
    border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

    svg {
      height: 3.2rem;
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
    }
  }
`;

export const ErrorMessageText: StyledComponent<any, any> = styled.div`
  text-align: center;
  margin-left: 5.8rem;
  border-radius: 0.6rem;
  width: calc(100% - 5.8rem);
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorDangerBg};
  border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorDangerBorder};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const SuccesMessage: StyledComponent<any, any> = styled.div`
  text-align: center;
  margin-left: 5.8rem;
  border-radius: 0.6rem;
  width: calc(100% - 5.8rem);
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorSuccessBg};
  border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorSuccessBorder};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;
