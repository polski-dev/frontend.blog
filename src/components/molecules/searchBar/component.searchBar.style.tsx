import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  position: absolute;
  transition: all 0.3s;
  border-radius: 0.6rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  height: 3rem;
  max-width: 100%;
  font-size: 1.5rem;
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.colorText};
  padding: ${({ theme }) => theme.break.main};
  background: ${({ theme }) => theme.colorInputBg};

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  top: 0.75rem;
  right: 0.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  background-color: transparent;

  svg {
    height: 1.5rem;
    fill: ${({ theme }) => theme.colorLink};
  }
`;

export const SugestBox = styled.ul`
  width: 100%;
  z-index: 999;
  max-width: 100%;
  position: relative;
  transition: all 0.3s;
  padding: ${({ theme }) => theme.break.main} 0;
  background-color: ${({ theme }) => theme.colorInputBg};

  &::before {
    top: 0.5rem;
    content: "";
    left: 1.5rem;
    z-index: 9999;
    display: block;
    height: 0.1rem;
    position: absolute;
    width: calc(100% - 3rem);
    background-color: ${({ theme }) => theme.colorBorder};
  }
`;

export const Item = styled.li`
  svg {
    height: 2rem;
    position: relative;
  }

  a {
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.break.small} ${({ theme }) => theme.break.main};

    svg {
      stroke: ${({ theme }) => theme.colorLink};
    }

    &:hover {
      background-color: #3d4043;

      svg {
        stroke: ${({ theme }) => theme.colorLinkActive};
      }
    }
  }
`;

export const IconBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 0.6rem;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: ${({ theme }) => theme.break.small};
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
`;
export const ContentTitle = styled.div`
  flex: 100%;
  max-width: 100%;
`;
export const ContentTags = styled.ul`
  flex: 100%;
  display: flex;
  max-width: 100%;
`;
export const ContentTag = styled.li`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colorTextDesactive};
  padding-right: ${({ theme }) => theme.break.small};

  &:last-of-type {
    span {
      &:last-of-type {
        display: none;
      }
    }
  }

  span {
    opacity: 0.3;
  }
`;
