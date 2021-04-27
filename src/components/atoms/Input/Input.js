import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: ${({ as }) => as && '150px'};
  font-size: ${({ theme }) => theme.font.size.button};
  padding: 15px 12px;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  resize: vertical;
  transition: box-shadow 0.15s ease;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export default Input;
