import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  display: block;
  position: relative;
  border-radius: 0.6rem;
  margin-top: ${({ theme }) => theme.break.big};
  border: 0.1rem solid ${({ theme }) => theme.colorBorder};
`;
export const Heder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colorBorder};
  padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.small};

  a {
    margin-left: auto;
    font-size: 1.2rem;
  }
`;

export const Title = styled.h6`
  text-transform: lowercase;
  span {
    opacity: 0.3;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const Item = styled.li`
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colorBorder};
  padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.small};

  h6 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colorTextDesactive};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
