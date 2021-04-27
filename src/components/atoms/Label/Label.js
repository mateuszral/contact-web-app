import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  color: ${({ theme }) => theme.tertiary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.button};
  text-transform: uppercase;
  margin: 10px 0;

  &::after {
    content: '*';
    position: absolute;
    right: -10px;
    top: 0;
    color: ${({ theme }) => theme.warning};
  }
`;

export default Label;
