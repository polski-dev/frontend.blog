import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.break.big} 0;
`;

export const Title = styled.h5`
  width: 50%;
  line-height: 1;
  padding-bottom: ${({ theme }) => theme.break.main};
`;

export const Options = styled.div`
  width: 50%;
`;

export const Article = styled.article`
  overflow: hidden;
  position: relative;
  border-radius: 0.6rem;
  margin-bottom: ${({ theme }) => theme.break.big};
  padding-bottom: ${({ theme }) => theme.break.main};
  background-color: ${({ theme }) => theme.colorPostBg};

  .titleArticle {
    width: 100%;
    display: block;
    position: relative;
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.break.main};

  a {
    height: 3rem;
    margin-left: auto;
  }
`;
export const BoxAuthor = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${({ theme }) => theme.break.main};
`;

export const BoxAuthorImg = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
`;

export const AuthorData = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }) => theme.break.small};

  a {
    width: 100%;
    display: flex;
    height: max-content;
  }
`;

export const AuthorName = styled.strong`
  width: 100%;
`;

export const DateAdded = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colorTextDesactive};
`;

export const TitleArticle = styled.h3`
  width: 100%;
  display: block;
  position: relative;
  padding-left: 4.95rem;
`;

export const ListTags = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 4.95rem;
  padding-bottom: ${({ theme }) => theme.break.big};
`;
export const Tag = styled.li`
  width: max-content;
  position: relative;
  padding-right: ${({ theme }) => theme.break.small};

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

export const ListStats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 4.95rem;
  width: calc(100% - 8rem);
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colorTextDesactive};
  padding-right: ${({ theme }) => theme.break.main};

  svg {
    height: 2rem;
    display: inline-block;
    fill: ${({ theme }) => theme.colorTextDesactive};
    padding-right: ${({ theme }) => theme.break.small};
  }
`;
