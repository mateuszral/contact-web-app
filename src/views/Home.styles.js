import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const ContentWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.layout.mobileSidesPadding};

  & > div,
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Paragraph} {
      text-align: center;
    }
  }

  & > form {
    align-items: stretch;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > div,
    & > form {
      padding: 0 70px;

      ${Paragraph} {
        text-align: left;
      }
    }

    & > div {
      justify-content: center;
    }
  }
`;

export const Heading = styled.h2`
  margin-top: 20px;
  text-align: center;

  ${({ theme }) => theme.mq.bigTablet} {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.font.size.heading};
    text-align: left;
  }
`;

export const Phone = styled.img`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
  margin-top: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.warning};
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 100%;
  align-self: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border: 0;
  border-radius: 25px;
  outline: none;
  padding: 15px;
  margin-top: 20px;

  ${({ theme }) => theme.mq.bigTablet} {
    width: 50%;
    align-self: center;
  }
`;

export const HeroWrapper = styled.div`
  display: none;
  position: relative;

  ${({ theme }) => theme.mq.bigTablet} {
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(240, 240, 240, 1) 15%,
      rgba(249, 249, 255, 0) 100%
    );
  }

  img {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.quaternary};
  color: ${({ theme }) => theme.white};
  margin-top: 20px;
  padding: 15px;

  ${({ theme }) => theme.mq.bigTablet} {
    justify-content: space-around;
    margin-top: -3px;
  }

  button {
    background-color: transparent;
    color: inherit;
    padding: 5px;
    border: 0;
    outline: none;
  }

  svg {
    margin: 0 5px;
    cursor: pointer;
  }

  ${Paragraph} {
    width: 100%;
    text-align: center;
    color: inherit;
    font-size: ${({ theme }) => theme.font.size.button};
  }
`;
