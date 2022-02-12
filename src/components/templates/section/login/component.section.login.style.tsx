import styled from "styled-components";

export const Section = styled.section`
  padding: ${({ theme }) => theme.break.main};
  margin: ${({ theme }) => theme.break.main} 0;
`;

export const BoxContent = styled.div`
  border-radius: 0.6rem;
  margin: ${({ theme }) => theme.break.main} 0;
  background-color: ${({ theme }) => theme.colorPostBg};
  padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};
`;

export const BoxAuth = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 41.5rem);

  @media all and (min-width: 768px) {
    height: calc(100vh - 29.3rem);
  }
`;

export const Title = styled.h3`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.6rem;
  align-items: center;
  white-space: nowrap;
  justify-content: center;

  @media all and (min-width: 768px) {
    font-size: 2.8rem;
  }

  svg {
    height: 1.6rem;
    fill: ${({ theme }) => theme.colorText};
    margin: ${({ theme }) => theme.break.small} ${({ theme }) => theme.break.main};

    @media all and (min-width: 768px) {
      height: 2.4rem;
    }
  }
`;

export const Description = styled.p`
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.break.big};
  }
`;

export const BoxOption = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 40rem;
  flex-direction: column;
  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({ theme }) => theme.break.main};

    svg {
      height: 1.5rem;
      position: relative;
      margin-right: 1rem;
    }
  }
`;

export const BoxRegistrationInfo = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 40rem;
  text-align: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    white-space: nowrap;
    margin-top: ${({ theme }) => theme.break.big};
  }

  span {
    min-width: 16rem;
    position: relative;
    padding: 0 ${({ theme }) => theme.break.small};

    @media all and (min-width: 768px) {
      min-width: auto;
      padding: 0 ${({ theme }) => theme.break.main};
    }
  }

  a {
    padding-left: ${({ theme }) => theme.break.small};
  }

  &::before,
  ::after {
    content: "";
    top: 0.9rem;
    width: 100%;
    height: 0.1rem;
    position: relative;
    display: inline-block;
    background-color: ${({ theme }) => theme.colorTextDesactive};
  }
`;
