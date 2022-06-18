import styled, { css } from "styled-components";

export const Article = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 0.6rem;
  margin-bottom: ${({ theme }) => theme.break.big};
  padding-bottom: ${({ theme }) => theme.break.main};
  background-color: ${({ theme }) => theme.colorPostBg};
`;

export const Img = styled.div`
  opacity: 0.07;
  height: 12rem;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colorText};

  @media all and (min-width: 768px) {
    height: 30rem;
  }

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
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.break.main};

  .title {
    margin-bottom: ${({ theme }) => theme.break.small};

    @media all and (min-width: 768px) {
      margin-left: 4.95rem;
    }
  }
`;

export const BoxAuthor = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: ${({ theme }) => theme.break.main};
`;

export const AuthorAvatar = styled.div`
  opacity: 0.07;
  min-width: 4.2rem;
  min-height: 4.2rem;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  box-shadow: 0 0 12px rgb(0 0 0 / 60%);
  background-color: ${({ theme }) => theme.colorText};

  &::after {
    top: 0;
    left: -100%;
    content: "";
    width: 80%;
    height: 100%;
    display: block;
    position: absolute;
    animation: loadArticleAuthorAvatar 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(to right, transparent 0%, #969ba1 50%, transparent 100%);
  }

  @keyframes loadArticleAuthorAvatar {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;

export const AuthorData = styled.div`
  width: calc(100% - 4.25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and (min-width: 768px) {
    width: 20rem;
  }
`;

type TextType = {
  height: number;
};

export const Text = styled.div<TextType>`
  width: 100%;
  opacity: 0.07;
  display: block;
  overflow: hidden;
  position: relative;
  height: ${({ height }) => `${height}rem`};
  background-color: ${({ theme }) => theme.colorText};

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
export const List = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    margin-bottom: 0;
    width: max-content;
    margin-left: 4.95rem;
  }
`;
export const Item = styled.div`
  width: 6rem;
  margin-right: ${({ theme }) => theme.break.small};

  &:last-of-type {
    margin-right: 0;
  }
`;

export const BoxStats = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
