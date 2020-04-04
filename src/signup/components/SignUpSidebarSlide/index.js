import React from 'react';
import pt from 'prop-types';

const propTypes = {
  currentSlide: pt.number,
  slide: pt.shape({
    image: pt.string,
    title: pt.string,
    description: pt.string,
  }),
};

function SignUpSidebarSlide({ currentSlide, slide }) {
  const style = { transform: `translate(${currentSlide * -320}px, 0)` };

  return (
    <div
      className="nc-signup-sidebar-slider__slide nc-signup-slide"
      style={style}
    >
      <div className="nc-signup-slide__image">
        <img src={slide.image} alt='Lots of features' />
      </div>
      <p className="nc-signup-slide__title">{slide.title}</p>
      <p className="nc-signup-slide__desc">{slide.description}</p>
    </div>
  );
}

SignUpSidebarSlide.propTypes = propTypes;

export { SignUpSidebarSlide };
