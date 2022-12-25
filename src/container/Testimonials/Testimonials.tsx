import React from 'react';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import './Testimonials.scss';

const Testimonials = () => {
  return <div>Testimonials</div>;
};

export default AppWrap(MotionWrap(Testimonials), 'testimonials', 'app__darkbg');
