import { motion } from 'framer-motion';

import './About.scss';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import images from '../../constants/images';

const About = () => {
  const galleryImages = [images.emilie1, images.emilie2, images.emilie3];

  return (
    <>
      <h2 className="head-text">About me</h2>
      <div className="about__gallery">
        {galleryImages.map((image, index) => (
          <div>
            <motion.img
              whileHover={{ scale: [1, 1.1] }}
              transition={{ duration: 0.3 }}
              src={image}
              alt={`Portrait of Emilie ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="about__content">
        <p className="about__text">
          I am a 26-year-old frontend developer with a lot of customer
          experience. I am a conscientious and responsible person with a
          positive attitude. I have a driving force where I constantly work to
          improve myself as a person and in my line of work. I have a good eye
          for details and see what needs to be done.
        </p>
        <p className="about__text">
          I am humble and have no problem acknowledging mistakes or potential
          for improvement, and constructive criticism is well received. I am a
          team player and enjoy working with others, but also very independent
          and structured to work well by myself.
        </p>
        <a href={images.resume} download className="button button__primary">
          Download Resume
        </a>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'about'), 'about', 'app__primarybg');

/* About 
      
      What am I looking for? 
      - Self development 
          - senior/mentor frontend developer
          - courses
          - events
      - team building exercises    
      - paid well
      - 
      
      
      */
