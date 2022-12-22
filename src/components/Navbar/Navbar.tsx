import { HiX } from 'react-icons/hi';
import { CgMenuRightAlt } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { useState } from 'react';

import images from '../../constants/images';
import './Navbar.scss';

export const menuItems = [
  'home',
  'portfolio',
  'skills',
  'certificates',
  'about',
  'testimonials',
  'contact',
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <CgMenuRightAlt onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menuItems.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
