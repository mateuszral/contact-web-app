import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 52px;
    color: ${({ theme }) => theme.warning};
  }
`;

const FormField = forwardRef(
  ({ label, name, id, placeholder, type = 'text', isError, ...props }, ref) => (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        isError={isError}
        {...props}
      />
      {isError && <AiOutlineExclamationCircle />}
    </Wrapper>
  ),
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
