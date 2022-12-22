import { motion } from 'framer-motion';
import Button from '../../components/Button/Button';
import images from '../../constants/images';
import AppWrap from '../../wrapper/AppWrap';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      >
        <div className="header__graphics">
          <div className="header__logo">
            <img src={images.logo} alt="logo" />
          </div>
          <div className="header__image">
            <img src={images.header} alt="Portrait of Emilie Tønnessen" />
          </div>
        </div>
        <div className="header__content">
          <h1 className="header__headline">Emilie Tønnessen</h1>
          <h2 className="header__job-position">Frontend Developer</h2>
          <p className="header__job-description">
            I implement visual and interactive elements to websites. I make your
            design come alive!
          </p>
        </div>
        <div className="header__button-group">
          <Button variant="primary" onClick={() => {}}>
            View my Portfolio
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            Download Resume
          </Button>
        </div>
      </motion.div>
    </header>
  );
};

export default AppWrap(Header, 'home');
