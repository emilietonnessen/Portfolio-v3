import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import './Portfolio.scss';
import AppWrap from '../../wrapper/AppWrap';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import MotionWrap from '../../wrapper/MotionWrap';
import Spinner from '../../components/Spinner/Spinner';
import { client, urlFor } from '../../client';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState<any[]>([]);
  const [filterProjects, setFilterProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
    if (!projects.length) {
      setIsLoading(true);
      setIsError(false);

      const query = '*[_type == "projects"]';

      client
        .fetch(query)
        .then((data: any[]) => {
          setProjects(data);
          setFilterProjects(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> section
      </h2>

      <div className="portfolio__tags-container">
        {tags.map((item, index) => (
          <button
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`portfolio__tags-item ${
              activeFilter === item ? 'portfolio__tags-item--active' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="app__flex">
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <ErrorBox message="Unable to load projects. Try again later." />
        ) : (
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="portfolio__projects"
          >
            {filterProjects.map((work, index) => (
              <div className="portfolio__card-item app__flex" key={index}>
                <div className="portfolio__card-image app__flex">
                  <img src={urlFor(work?.imgUrl).url()} alt={work?.title} />

                  <div className="portfolio__card-image--hover app__flex">
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <span className="sr-only">
                          Open live website, new window
                        </span>
                        <AiFillEye aria-hidden="true" />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <span className="sr-only">
                          Open GitHub repository, new window
                        </span>
                        <AiFillGithub aria-hidden="true" />
                      </motion.div>
                    </a>
                  </div>
                </div>

                <div className="portfolio__card-content app__flex">
                  <h3 className="bold-text">{work.title}</h3>
                  <p style={{ marginTop: 10 }}>{work.description}</p>

                  <div className="portfolio__card-tag app__flex">
                    <p className="p-text">{work.tags[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, 'portfolio'),
  'portfolio',
  'app__darkbg'
);
