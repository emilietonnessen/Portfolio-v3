import { motion } from 'framer-motion';
import images from '../../constants/images';
import AppWrap from '../../wrapper/AppWrap';
import './Header.scss';
import '../../components/Button/Button.scss';

const Header = () => {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      >
        <div className="header__graphics">
          <div className="header__image">
            <img src={images.header} alt="Portrait of Emilie Tønnessen" />
          </div>
        </div>
        <h1 className="header__headline">Emilie Tønnessen</h1>
        <h2 className="header__job-position">Frontend Developer</h2>
        <p className="header__job-description">
          I implement visual and interactive elements to websites. I make your
          design come alive!
        </p>
        <div className="header__button-group">
          <a className="button button__primary" href="#portfolio">
            View my Portfolio
          </a>
          <a
            href={images.englishResume}
            download
            className="button button__secondary"
            title="Download english PDF resume"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default AppWrap(Header, 'home');
