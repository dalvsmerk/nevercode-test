import React, { useState } from 'react';
import pt from 'prop-types';

import { FormButton, FormInput } from 'common/components';

const propTypes = {
  onSubmit: pt.func.isRequired,
};

const handleChange = handler => e => handler(e.target.value);

function SignUpForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = handleChange(setEmail);
  const handlePasswordChange = handleChange(setPassword);

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: validation
    onSubmit(email, password);
  };

  return (
    <form className="nc-signup-form" onSubmit={handleSubmit}>
      <h2 className="nc-signup-form__title">Welcome!</h2>
      <p className="nc-signup-form__subtitle">
        Sign up via form below or use one of our OAuth
        providers to create your account
      </p>
      <FormInput
        type="email"
        label="Email address"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <FormInput
        type="password"
        label="Password"
        placeholder="Enter your password"
        message="At least 8 characters"
        value={password}
        onChange={handlePasswordChange}
        // {/* TODO: validation */}
      />
      <FormButton onClick={handleSubmit}>Create account</FormButton>
    </form>
  );
}

SignUpForm.propTypes = propTypes;

export { SignUpForm };
