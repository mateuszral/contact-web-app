import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ onChange, label, value, name, id, placeholder, type = 'text', ...props }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input
      name={name}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  </Wrapper>
);

FormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
