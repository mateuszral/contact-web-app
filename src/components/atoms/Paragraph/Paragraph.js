import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme, isPrimary }) => (isPrimary ? theme.primary : theme.grey100)};
  font-weight: ${({ theme, isBold }) => isBold && theme.font.weight.bold};
`;

export default Paragraph;
