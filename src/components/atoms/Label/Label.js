import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  color: ${({ theme }) => theme.tertiary};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &::after {
    content: '*';
    position: absolute;
    right: -10px;
    top: 0;
    color: ${({ theme }) => theme.warning};
  }
`;

export default Label;
