import { BsFillEnvelopeFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

import './Contact.scss';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

const Contact = () => {
  return (
    <div className="contact__container">
      <h2 className="head-text">Get in touch</h2>

      <div className="contact__card-wrap">
        {/* Email */}
        <motion.a
          whileHover={{
            scale: [1, 1.05],
            boxShadow: '0 0 25px rgba(0, 0, 0, 0.25)',
          }}
          transition={{ duration: 0.5 }}
          href="emailto: emilie@tonnessen.com"
          className="contact__card"
        >
          <BsFillEnvelopeFill />
          emilie@tonnessen.com
        </motion.a>

        {/* Linkedin */}
        <motion.a
          whileHover={{
            scale: [1, 1.05],
            boxShadow: '0 0 25px rgba(0, 0, 0, 0.25)',
          }}
          transition={{ duration: 0.5 }}
          href="https://www.linkedin.com/in/emilie-t%C3%B8nnessen-19a850191/"
          className="contact__card"
        >
          <BsLinkedin />
          Linkedin Profile
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{
            scale: [1, 1.05],
            boxShadow: '0 0 25px rgba(0, 0, 0, 0.25)',
          }}
          transition={{ duration: 0.5 }}
          href="https://github.com/emilietonnessen"
          className="contact__card"
        >
          <BsGithub />
          GitHub Profile
        </motion.a>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'contact'),
  'contact',
  'app__darkbg'
);
