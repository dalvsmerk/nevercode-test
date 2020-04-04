import React from 'react';

import { SignUpForm } from 'signup/components';

function SignUpFormContainer() {
  return (
    <div className="nc-signup">
      <div className="nc-signup__form">
        <SignUpForm onSubmit={() => {}} />
      </div>
    </div>
  );
}

export { SignUpFormContainer };
