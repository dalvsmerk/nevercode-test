import React, { useState } from 'react';
import cn from 'classnames';
import sidebarImage from 'assets/images/asset-sidebar-illustration.png';

import { SignUpSidebarSlide } from 'signup/components/SignUpSidebarSlide';

function SignUpSidebar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = getSlides();

  const handleSetSlide = i => () => setCurrentSlide(i);

  const renderSlide = slide =>
    <SignUpSidebarSlide slide={slide} currentSlide={currentSlide} />;

  const renderControl = (_, i) =>
    <SlideControl
      index={i}
      currentSlide={currentSlide}
      onSetSlide={handleSetSlide}
    />;

  return (
    <div className="nc-signup-sidebar">
      <div className="nc-signup-sidebar__slider nc-signup-sidebar-slider">
        {slides.map(renderSlide)}
      </div>
      <div className="nc-signup-sidebar__controls nc-signup-sidebar-controls">
        {slides.map(renderControl)}
      </div>
    </div>
  );
}

function SlideControl({ index, currentSlide, onSetSlide }) {
  const classes = cn('nc-signup-sidebar-controls__item', {
    'nc-signup-sidebar-controls__item--active': index === currentSlide,
  });
  return (
    <div className={classes} onClick={onSetSlide(index)}></div>
  );
}

const defaultDescription =
  `Lorem ipsum dolor sit amet, consectetur
  adipiscing edit, sed do eiusmod tempor`;

function getSlides() {
  return [
    {
      image: sidebarImage,
      title: 'Lots of features',
      description: defaultDescription,
    },
    {
      image: sidebarImage,
      title: 'More features',
      description: defaultDescription,
    },
    {
      image: sidebarImage,
      title: 'Even more features',
      description: defaultDescription,
    },
  ];
}

export { SignUpSidebar };
