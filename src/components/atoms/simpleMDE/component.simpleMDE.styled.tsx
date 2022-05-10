import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const SimpleMDEBox: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.6rem;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorBorder)};

  .CodeMirror {
    direction: ltr;
    overflow: hidden;
    min-height: 300px;
    position: relative;
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};

    pre {
      &.CodeMirror-line,
      .CodeMirror-line-like {
        margin: 0;
        z-index: 2;
        padding: 0 4px;
        border-width: 0;
        background: 0 0;
        border-radius: 0;
        white-space: pre;
        word-wrap: normal;
        overflow: visible;
        font-size: inherit;
        position: relative;
        line-height: inherit;
        -webkit-border-radius: 0;
        font-variant-ligatures: contextual;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-variant-ligatures: contextual;
        color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
      }
    }
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px;
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  }

  .CodeMirror-gutter-filler {
    background-color: yellow;
    position: absolute;
    z-index: 6;
    display: none;
    outline: 0;
    left: 0;
    bottom: 0;
  }
  .CodeMirror-scrollbar-filler {
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
    position: absolute;
    z-index: 6;
    display: none;
    outline: 0;
    right: 0;
    bottom: 0;
  }
  .CodeMirror-gutters {
    border-right: 1px solid blue;
    background-color: green;
    white-space: nowrap;
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    z-index: 3;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
    white-space: nowrap;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .CodeMirror-guttermarker {
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  }
  .CodeMirror-guttermarker-subtle {
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  }
  .CodeMirror-cursor {
    width: 0;
    border-right: none;
    position: absolute;
    pointer-events: none;
    border-left: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  }
  .cm-fat-cursor {
    .CodeMirror-cursor {
      width: auto;
      border: 0 !important;
      background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
    }
    div.CodeMirror-cursors {
      z-index: 1;
    }
    .CodeMirror-line {
      &::selection {
        background: 0 0;
      }
      > span {
        &::selection {
          background: 0 0;
        }
        > span {
          &::selection {
            background: 0 0;
          }
          &::-moz-selection {
            background: 0 0;
          }
        }
        &::-moz-selection {
          background: 0 0;
        }
      }
      &::-moz-selection {
        background: 0 0;
      }
    }
    caret-color: transparent;
  }
  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }
  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }
  .cm-s-default {
    .cm-header {
      color: $color_3;
    }
    .cm-quote {
      color: $color_4;
    }
    .cm-keyword {
      color: $color_7;
    }
    .cm-atom {
      color: $color_8;
    }
    .cm-number {
      color: $color_9;
    }
    .cm-def {
      color: $color_3;
    }
    .cm-variable-2 {
      color: $color_10;
    }
    .cm-type {
      color: $color_11;
    }
    .cm-variable-3 {
      color: $color_11;
    }
    .cm-comment {
      color: $color_12;
    }
    .cm-string {
      color: $color_13;
    }
    .cm-string-2 {
      color: $color_14;
    }
    .cm-meta {
      color: $color_15;
    }
    .cm-qualifier {
      color: $color_15;
    }
    .cm-builtin {
      color: $color_16;
    }
    .cm-bracket {
      color: $color_17;
    }
    .cm-tag {
      color: $color_18;
    }
    .cm-attribute {
      color: $color_19;
    }
    .cm-hr {
      color: $color_2;
    }
    .cm-link {
      color: $color_19;
    }
    .cm-error {
      color: $color_20;
    }
  }
  .cm-negative {
    color: $color_5;
  }
  .cm-positive {
    color: $color_6;
  }
  .cm-header {
    font-weight: 700;
  }
  .cm-strong {
    font-weight: 700;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }
  .cm-invalidchar {
    color: $color_20;
  }
  .CodeMirror-composing {
    border-bottom: 2px solid;
  }
  div.CodeMirror {
    span.CodeMirror-matchingbracket {
      color: $color_21;
    }
    span.CodeMirror-nonmatchingbracket {
      color: $color_22;
    }
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }
  .CodeMirror-scroll {
    overflow: scroll !important;
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: 0;
    position: relative;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .CodeMirror-hscrollbar {
    position: absolute;
    z-index: 6;
    display: none;
    outline: 0;
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-vscrollbar {
    position: absolute;
    z-index: 6;
    display: none;
    outline: 0;
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -50px;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: 0 0 !important;
    border: none !important;
    &::selection {
      background-color: $background-color_3;
    }
    &::-moz-selection {
      background-color: $background-color_3;
    }
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-wrap {
    pre.CodeMirror-line {
      word-wrap: break-word;
      white-space: pre-wrap;
      word-break: normal;
    }
    pre.CodeMirror-line-like {
      word-wrap: break-word;
      white-space: pre-wrap;
      word-break: normal;
    }
  }
  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px;
  }
  .CodeMirror-rtl {
    pre {
      direction: rtl;
      direction: rtl;
    }
  }
  .CodeMirror-code {
    outline: 0;
  }
  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    pre {
      position: static;
    }
  }
  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }
  .CodeMirror-focused {
    div.CodeMirror-cursors {
      visibility: visible;
    }
    .CodeMirror-selected {
      background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
    }
  }
  .CodeMirror-selected {
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }
  .CodeMirror-line {
    &::selection {
      background: #d7d4f0;
    }
    > span {
      &::selection {
        background: #d7d4f0;
      }
      > span {
        &::selection {
          background: #d7d4f0;
        }
        &::-moz-selection {
          background: #d7d4f0;
        }
      }
      &::-moz-selection {
        background: #d7d4f0;
      }
    }
    &::-moz-selection {
      background: #d7d4f0;
    }
  }
  .cm-searching {
    background-color: $background-color_4;
    background-color: $background-color_5;
  }
  .cm-force-border {
    padding-right: 0.1px;
  }
  .cm-tab-wrap-hack {
    &:after {
      content: "";
    }
  }
  span.CodeMirror-selectedtext {
    background: 0 0;
  }

  .EasyMDEContainer {
    display: block;

    .CodeMirror {
      z-index: 0;
      height: auto;
      font: inherit;
      padding: 10px;
      word-wrap: break-word;
      box-sizing: border-box;
      border-bottom-left-radius: 0.6rem;
      border-bottom-right-radius: 0.6rem;
      border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
    }

    .CodeMirror-scroll {
      cursor: text;
    }

    .CodeMirror-fullscreen {
      left: 0;
      right: 0;
      top: 50px;
      bottom: 0;
      z-index: 8;
      height: auto;
      position: fixed !important;
      border-right: none !important;
      border-bottom-right-radius: 0 !important;
      background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
    }

    .CodeMirror-sided {
      width: 50% !important;
    }

    .CodeMirror-placeholder {
      opacity: 0.5;
    }

    .CodeMirror-focused {
      .CodeMirror-selected {
        background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
      }
    }
  }
  .EasyMDEContainer.sided--no-fullscreen {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    .CodeMirror-sided {
      flex: 1 1 auto;
      position: relative;
      border-right: none !important;
      border-bottom-right-radius: 0;
    }

    .editor-toolbar {
      width: 100%;
    }

    .editor-statusbar {
      width: 100%;
    }

    .editor-preview-active-side {
      height: auto;
      flex: 1 1 auto;
      position: static;
    }
  }

  .editor-toolbar {
    user-select: none;
    padding: 9px 10px;
    position: relative;
    -webkit-user-select: none;
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;

    .easymde-dropdown {
      background: 0 0;
      text-align: center;
      display: inline-block;
      text-decoration: none !important;
      height: 30px;
      margin: 0;
      padding: 0;

      border-radius: 40px;
      cursor: pointer;
      border-radius: 0;
      position: relative;

      border: 1px solid red;
      background: linear-gradient(to bottom right, #fff 0, #fff 84%, #333 50%, #333 100%);

      &:hover {
        background: linear-gradient(to bottom right, #fff 0, #fff 84%, #333 50%, #333 100%);
      }
    }

    button {
      margin: 0;
      background: 0 0;
      cursor: pointer;
      text-align: center;
      border-radius: 3px;
      display: inline-block;
      border: 1px solid transparent;
      text-decoration: none !important;
      padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

      i {
        font-size: 2rem;
        color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
      }

      &:hover,
      .active {
        background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};

        i {
          color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
        }
      }

      &:after {
        font-size: 65%;
        vertical-align: text-bottom;
        position: relative;
        top: 2px;
      }
    }

    i {
      &.separator {
        width: 0;
        top: -0.2rem;
        margin: 0 0.6rem;
        position: relative;
        color: transparent;
        text-indent: -10px;
        display: inline-block;
        border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
      }
    }

    button.heading-1 {
      &:after {
        content: "1";
      }
    }
    button.heading-2 {
      &:after {
        content: "2";
      }
    }
    button.heading-3 {
      &:after {
        content: "3";
      }
    }
    button.heading-bigger {
      &:after {
        content: "▲";
      }
    }
    button.heading-smaller {
      &:after {
        content: "▼";
      }
    }
  }

  .editor-toolbar {
    &.fullscreen {
      top: 0;
      left: 0;
      border: 0;
      opacity: 1;
      z-index: 9;
      width: 100%;
      height: 50px;
      position: fixed;
      box-sizing: border-box;
      padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
      background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

      &::before {
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 20px;
        height: 50px;
        position: fixed;
        background: red;
      }

      &::after {
        top: 0;
        right: 0;
        margin: 0;
        padding: 0;
        width: 20px;
        height: 50px;
        position: fixed;
        background: red;
      }
    }
  }

  .editor-toolbar {
    &.disabled-for-preview {
      button {
        &:not(.no-disable) {
          pointer-events: none;
          i {
            color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
          }
        }
      }
    }
  }

  .editor-statusbar {
    text-align: right;
    font-weight: bold;
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

    span {
      min-width: 4em;
      margin-left: 1em;
      display: inline-block;
    }

    .lines {
      &:before {
        content: "lines: ";
      }
    }

    .words {
      &:before {
        content: "words: ";
      }
    }
    .characters {
      &:before {
        content: "characters: ";
      }
    }
  }
  .editor-preview-full {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 7;
    overflow: auto;
    display: none;
    box-sizing: border-box;
  }

  .editor-preview-side {
    right: 0;
    bottom: 0;
    top: 50px;
    z-index: 9;
    width: 50%;
    display: none;
    overflow: auto;
    position: fixed;
    word-wrap: break-word;
    box-sizing: border-box;
    border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
  }

  .editor-preview-side,
  .editor-preview-full {
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

    img {
      width: 100%;
      display: block;
    }

    a {
      font-weight: bold;
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};

      &:hover {
        color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
      }
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
  }

  .editor-preview-active-side {
    display: block;
  }
  .editor-preview-active {
    display: block;
  }
  .editor-preview {
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

    > p {
      margin-top: 0;
    }
    pre {
      background: #eee;
      margin-bottom: 10px;
    }
    table {
      td {
        border: 1px solid #ddd;
        padding: 5px;
      }
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }
  }

  .cm-s-easymde {
    .cm-tag {
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
    }
    .cm-attribute {
      color: red;
    }
    .cm-string {
      color: red;
    }

    .cm-header-1,
    .cm-header-2,
    .cm-header-3,
    .cm-header-4,
    .cm-header-5,
    .cm-header-6,
    .cm-quote {
      display: inline-block;
      padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
    }

    .cm-header-1 {
      font-size: 3.8rem;
    }

    .cm-header-2 {
      font-size: 3.5rem;
    }
    .cm-header-3 {
      font-size: 2.8rem;
    }
    .cm-header-4 {
      font-size: 2.5rem;
    }
    .cm-header-5 {
      font-size: 1.8rem;
    }
    .cm-header-6 {
      font-size: 1.5rem;
    }
    .cm-comment {
      background: red;
      border-radius: 2px;
    }

    .cm-link {
      padding: 0 0.3rem;
      font-weight: bold;
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
    }

    .cm-url {
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    }

    .cm-quote {
      font-style: italic;
      padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
      background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
    }

    .cm-formatting {
      border: none;
      font-weight: bold;
      background-color: transparent;
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
    }
  }
  .easymde-dropdown-content {
    display: block;
    visibility: hidden;
    position: absolute;
    background-color: $background-color_6;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    padding: 8px;
    z-index: 2;
    top: 30px;
  }
  .easymde-dropdown {
    &:active {
      .easymde-dropdown-content {
        visibility: visible;
      }
    }
    &:focus {
      .easymde-dropdown-content {
        visibility: visible;
      }
    }
    &:focus-within {
      .easymde-dropdown-content {
        visibility: visible;
      }
    }
  }
  span[data-img-src] {
    &::after {
      content: "";
      background-image: var(--bg-image);
      display: block;
      max-height: 100%;
      max-width: 100%;
      background-size: contain;
      height: 0;
      padding-top: var(--height);
      width: var(--width);
      background-repeat: no-repeat;
    }
  }
  @media print {
    .CodeMirror {
      div.CodeMirror-cursors {
        visibility: hidden;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    .editor-toolbar {
      i.no-mobile {
        display: none;
      }
    }
  }
`;
