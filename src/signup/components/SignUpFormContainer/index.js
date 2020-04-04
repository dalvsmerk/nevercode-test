import React from 'react';

import { SignUpForm } from 'signup/components';

function SignUpFormContainer() {
  return (
    <div className="nc-signup-container">
      <div className="nc-signup-container__form">
        <SignUpForm onSubmit={() => {}} />
      </div>
    </div>
  );
}

export { SignUpFormContainer };
