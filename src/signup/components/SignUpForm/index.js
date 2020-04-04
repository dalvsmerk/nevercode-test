import React, { useState } from 'react';
import pt from 'prop-types';

import { FormButton, FormInput } from 'common/components';

const propTypes = {
  onSubmit: pt.func.isRequired,
};

const isEmpty = o => Object.keys(o).length === 0;

const handleChange = handler => e => handler(e.target.value);

const defaultErrors = { email: undefined, password: undefined };

const emailValid = email => !!email && email.length > 0;
const passwordValid = password => !!password && password.length >= 8;

function SignUpForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(defaultErrors);

  const handleEmailChange = handleChange(setEmail);
  const handlePasswordChange = handleChange(setPassword);

  const handleSubmit = e => {
    e.preventDefault();

    const errors = {
      email: !emailValid(email) ? 'Should not be empty' : undefined,
      password: !passwordValid(password) ? 'At least 8 characters' : undefined,
    };

    if (!isEmpty(errors)) {
      setErrors(errors);
      return;
    }

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
        message={errors.email}
      />
      <FormInput
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
        message={errors.password}
      />
      <FormButton onClick={handleSubmit}>Create account</FormButton>
    </form>
  );
}

SignUpForm.propTypes = propTypes;

export { SignUpForm };
