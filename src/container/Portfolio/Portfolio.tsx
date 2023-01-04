import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import './Portfolio.scss';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { client, urlFor } from '../../client';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState<any[]>([]);
  const [filterProjects, setFilterProjects] = useState<any[]>([]);

  const tags = [
    'HTML',
    'Sass',
    'JavaScript',
    'Web Design',
    'Logo Design',
    'React JS',
    'TypeScript',
    'Sanity',
    'Framer Motion',
    'All',
  ];

  // Set filter and animate the cards
  const handleProjectFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProjects(projects);
      } else {
        setFilterProjects(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  // Fetch projects from Sanity client
  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data: any[]) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> section
      </h2>

      <div className="portfolio__tags-container">
        {tags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`portfolio__tags-item ${
              activeFilter === item ? 'portfolio__tags-item--active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="portfolio__projects"
      >
        {filterProjects.map((work, index) => (
          <div className="portfolio__card-item app__flex" key={index}>
            <div className="portfolio__card-image app__flex">
              <img src={urlFor(work?.imgUrl).url()} alt={work?.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="portfolio__card-image--hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="portfolio__card-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p style={{ marginTop: 10 }}>{work.description}</p>

              <div className="portfolio__card-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, 'portfolio'),
  'portfolio',
  'app__darkbg'
);
