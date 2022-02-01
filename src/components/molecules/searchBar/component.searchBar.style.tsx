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
  padding-bottom: ${({ theme }) => theme.break.big};
  padding-right: ${({ theme }) => theme.break.main};
  padding-left: ${({ theme }) => theme.break.main};
  background-color: ${({ theme }) => theme.colorInputBg};
`;

export const Item = styled.li`
  font-size: 1.2rem;

  svg {
    top: 0.2rem;
    height: 1.2rem;
    position: relative;
    margin-right: 0.5rem;
  }

  a {
    svg {
      stroke: ${({ theme }) => theme.colorLink};
    }

    &:hover {
      svg {
        stroke: ${({ theme }) => theme.colorLinkActive};
      }
    }
  }

  h6 {
    padding: ${({ theme }) => theme.break.big} 0 ${({ theme }) => theme.break.small} 0;
    ${({ theme }) => theme.colorTextDesactive};
  }
`;
