import React from 'react';
import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

import LogoImage from 'assets/images/logo.png';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  padding: 15px;

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 15px 50px;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const StyledParagraph = styled(Paragraph)`
  span {
    margin-left: 5px;

    ${({ theme }) => theme.mq.bigTablet} {
      margin-left: 25px;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <Logo src={LogoImage} alt="logo" />
    <StyledParagraph isPrimary isBold>
      CALL US
      <span>1-888-444-5555</span>
    </StyledParagraph>
  </Wrapper>
);

export default Header;
