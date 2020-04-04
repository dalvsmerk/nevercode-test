import React from 'react';

import { SignUpFormContainer, SignUpSidebar } from 'signup/components';

export function SignUp() {
  return (
    <div className="nc-signup">
      <SignUpSidebar />
      <SignUpFormContainer />
    </div>
  );
}
