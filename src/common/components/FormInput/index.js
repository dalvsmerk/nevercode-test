import React from 'react';
import pt from 'prop-types';

const propTypes = {
  label: pt.string.isRequired,
  onChange: pt.func.isRequired,
  value: pt.oneOfType([pt.string, pt.number]).isRequired,
  id: pt.string,
  message: pt.string,
  placeholder: pt.string,
  type: pt.string,
};

function FormInput({
  id,
  label,
  message,
  onChange,
  placeholder,
  type,
  value
}) {
  return (
    <label className="nc-form-input" htmlFor={id}>
      <span className="nc-form-input__label">{label}</span>
      <input
        id={id}
        className="nc-form-input__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {message && <span className="nc-form-input__message">{message}</span>}
      {/* TODO: validation */}
    </label>
  );
}

FormInput.propTypes = propTypes;

export { FormInput };
