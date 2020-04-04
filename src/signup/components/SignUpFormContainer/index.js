import React from 'react';
import smallStarIcon from 'assets/images/asset-cm-star-small.png';
import starIcon from 'assets/images/asset-cm-star.png';
import flutterIcon from 'assets/images/asset-flutter-icon.png';

import { SignUpForm } from 'signup/components';

const smallStarIconAmount = 15;
const starIconAmount = 10;
const flutterIconAmount = 8;

const toCoords = icon => ({
  src: icon,
  top: Math.random() * window.innerHeight,
  left: Math.random() * window.innerWidth,
});

const smallStarIcons = new Array(smallStarIconAmount)
  .fill(smallStarIcon)
  .map(toCoords);
const starIcons = new Array(starIconAmount)
  .fill(starIcon)
  .map(toCoords);
const flutterIcons = new Array(flutterIconAmount)
  .fill(flutterIcon)
  .map(toCoords);

const renderIcon = (icon, i) => (
  <img
    key={`small-star-${i}`}
    style={{ top: icon.top, left: icon.left }}
    src={icon.src}
    alt="small star"
    className="nc-signup-logo"
  />
);

function SignUpFormContainer() {
  return (
    <div className="nc-signup-container">
      <div className="nc-signup-container__logos">
        {smallStarIcons.map(renderIcon)}
        {starIcons.map(renderIcon)}
        {flutterIcons.map(renderIcon)}
      </div>
      <div className="nc-signup-container__form">
        <SignUpForm onSubmit={() => {}} />
      </div>
    </div>
  );
}

export { SignUpFormContainer };
