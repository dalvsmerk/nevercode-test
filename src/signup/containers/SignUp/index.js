import React from 'react';

import { SignUpForm } from 'signup/components';

export function SignUp() {
  return (
    <div className="nc-signup">
      <div className="nc-signup__form">
        <SignUpForm onSubmit={() => {}} />
      </div>
    </div>
  );
}
