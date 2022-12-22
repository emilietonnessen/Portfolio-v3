import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import './Projects.scss';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { client, urlFor } from '../../client';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState<any[]>([]);
  const [filterProjects, setFilterProjects] = useState<any[]>([]);

  const tags = [
    'React JS',
    'Next JS',
    'TypeScript',
    'Sass',
    'Web Design',
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

      <div className="app__work-filter">
        {tags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterProjects.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work?.imgUrl).url()} alt={work?.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
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

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
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
  MotionWrap(Projects, 'app__works'),
  'portfolio',
  'app__darkbg'
);
