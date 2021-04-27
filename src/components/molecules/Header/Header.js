import React from 'react';
import styled from 'styled-components';

import LogoImage from 'assets/images/logo.png';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: ${({ theme }) => theme.secondary};
`;

const Logo = styled.img`
  width: 150px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  span {
    margin-left: 25px;
  }
`;

const Header = () => (
  <Wrapper>
    <Logo src={LogoImage} alt="logo" />
    <Paragraph>
      CALL US
      <span>1-888-444-5555</span>
    </Paragraph>
  </Wrapper>
);

export default Header;
