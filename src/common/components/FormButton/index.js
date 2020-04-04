import React from 'react';
import pt from 'prop-types';

const propTypes = {
  children: pt.node.isRequired,
  onClick: pt.func.isRequired,
};

function FormButton({ children, onClick }) {
  return (
    <button className="nc-form-button" onClick={onClick}>
      {children}
    </button>
  );
}

FormButton.propTypes = propTypes;

export { FormButton };
