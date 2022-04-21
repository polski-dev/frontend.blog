import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;

  .container {
    border-radius: 0.6em;
    padding-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
  }

  .w-md-editor-bar {
    position: absolute;
    cursor: s-resize;
    right: 0;
    margin-top: -11px;
    margin-right: 0;
    width: 14px;
    z-index: 3;
    height: 10px;
    border-radius: 0 0 3px 0;
    -webkit-user-select: none;
    user-select: none;

    svg {
      display: block;
      margin: 0 auto;
    }
  }

  .w-md-editor-aree {
    overflow: auto;
    border-radius: 5px;
  }

  .w-md-editor-text {
    min-height: 100%;
    position: relative;
    text-align: left;
    white-space: pre-wrap;
    word-break: keep-all;
    overflow-wrap: break-word;
    box-sizing: border-box;
    padding: 10px;
    margin: 0;
    font-size: 14px;
    line-height: 18px;
    -webkit-font-variant-ligatures: common-ligatures;
    font-variant-ligatures: common-ligatures;
  }

  .w-md-editor-text-pre,
  .w-md-editor-text-input,
  .w-md-editor-text > .w-md-editor-text-pre {
    margin: 0;
    border: 0;
    background: none;
    box-sizing: inherit;
    display: inherit;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    -webkit-font-variant-ligatures: inherit;
    font-variant-ligatures: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    -moz-tab-size: inherit;
    tab-size: inherit;
    text-indent: inherit;
    text-rendering: inherit;
    text-transform: inherit;
    white-space: inherit;
    overflow-wrap: inherit;
    word-break: inherit;
    word-break: normal;
    padding: 0;
  }

  .w-md-editor-text-pre > code,
  .w-md-editor-text-input > code,
  .w-md-editor-text > .w-md-editor-text-pre > code {
    font-family: inherit;
  }

  .w-md-editor-text-pre {
    position: relative;
    margin: 0px;
    pointer-events: none;
  }

  .w-md-editor-text-input {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    resize: none;
    color: inherit;
    overflow: hidden;
    outline: 0;
    padding: inherit;
    -webkit-font-smoothing: antialiased;

    &:empty {
      -webkit-text-fill-color: inherit !important;
    }
  }

  .w-md-editor-text-pre,
  .w-md-editor-text-input {
    word-wrap: pre;
    word-break: break-word;
    white-space: pre-wrap;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .w-md-editor-text-input {
      color: transparent !important;

      &::selection {
        background-color: #accef7 !important;
        color: transparent !important;
      }
    }
  }

  .w-md-editor-text-pre {
    color: red;
    .table {
      .punctuation {
        color: #c3c3c3;
      }
      .table-header {
        color: #000;
      }
      .w-md-editor-text-pre {
        .url {
          color: #032f62 !important;
        }
      }
    }

    .url {
      .content {
        color: #0366d6;
      }
    }
    .hr {
      color: #999;
    }

    .blockquote {
      color: #a6a6a6;
    }

    .title,
    .bold {
      color: #000 !important;
    }

    .title {
      line-height: unset !important;
      font-size: unset !important;
      font-weight: unset !important;
    }

    .code.keyword {
      color: #596394 !important;
    }

    .strike {
      color: #bf4ca0;
    }

    .w-md-editor-toolbar-child {
      z-index: 1;
      display: none;
      position: absolute;
      border-radius: 3px;
      background-color: #fff;
      box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
    }
  }

  .w-md-editor-toolbar-child.active {
    display: block;
  }

  .w-md-editor-toolbar-child {
    .w-md-editor-toolbar {
      border-bottom: 0;
      padding: 3px;
      border-radius: 3px;
    }

    .w-md-editor-toolbar ul > li {
      display: block;
    }

    .w-md-editor-toolbar ul > li button {
      margin: 0;
      height: initial;
      box-sizing: border-box;
      padding: 3px 4px 2px 4px;
      width: -webkit-fill-available;
    }
  }

  .w-md-editor-toolbar {
    display: flex;
    user-select: none;
    align-items: center;
    padding: 0 5px 0 5px;
    -webkit-user-select: none;
    justify-content: space-between;
    border-radius: 0.6rem 0.6rem 0 0;
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
  }

  .w-md-editor-toolbar {
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: inline-block;
      font-size: 14px;

      button {
        border: none;
        height: 20px;
        padding: 4px;
        margin: 0 1px;
        outline: none;
        cursor: pointer;
        background: none;
        overflow: visible;
        line-height: 14px;
        white-space: nowrap;
        font-weight: normal;
        text-transform: none;
        transition: all 0.3s;
        border-radius: 0.6rem;
        color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};

        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
          background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};

          &:hover {
            background-color: transparent;
            color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
          }
        }
      }

      &.active {
        button {
          color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
          background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
        }
      }
    }
  }

  .w-md-editor-toolbar-divider {
    width: 1px;
    height: 14px;
    vertical-align: middle;
    margin: -3px 3px 0 3px !important;
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
  }

  .w-md-editor {
    text-align: left;
    position: relative;
    padding-bottom: 1px;
    border-radius: 0.6rem;
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
    border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
  }

  .w-md-editor-content {
    position: relative;
    border-radius: 0 0 3px 0;
  }

  .w-md-editor-input {
    width: 50%;
    height: 100%;
  }

  .w-md-editor-preview {
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    overflow: auto;
    padding: 10px 20px;
    position: absolute;
    border-left: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

    .anchor {
      display: none;
    }

    .contains-task-list {
      list-style: none;
    }
  }

  .w-md-editor-show-preview {
    .w-md-editor-input {
      width: 0%;
      overflow: hidden;
      background-color: #fdfdfd;
    }
    .w-md-editor-preview {
      width: 100%;
      box-shadow: inset 0 0 0 0;
    }
    .w-md-editor-input {
      width: 100%;
    }

    .w-md-editor-preview {
      width: 0%;
      padding: 0;
    }
  }

  .w-md-editor-fullscreen {
    overflow: hidden;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .w-md-editor-content {
      height: 100%;
    }
  }
`;

export const Header: StyledComponent<any, any> = styled.h5`
  width: 100%;
  display: block;
`;

export const Title: StyledComponent<any, any> = styled.h6`
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0 ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
`;

export const Form: StyledComponent<any, any> = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  button {
    display: block;
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0 ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} auto;
  }
`;

export const Preview: StyledComponent<any, any> = styled.div`
  width: 100%;
  height: 28rem;
  border-radius: 0.6rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
