import { Fragment, useEffect, useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { motion } from 'framer-motion';

import './SkillsAndExperience.scss';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { client, urlFor } from '../../client';

interface ExperienceProps {
  description: string;
  employer: string;
  index: string;
  jobPosition: string;
  list: string[];
  timePeriod: string;
}

interface SkillProps {
  bgColor: string;
  icon: any;
  name: string;
}

const SkillsAndExperience = () => {
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [skills, setSkills] = useState<SkillProps[]>([]);

  // Fetch skills and experience
  useEffect(() => {
    const experiencesQuery = '*[_type == "experience"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experiencesQuery).then((data: ExperienceProps[]) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data: SkillProps[]) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      {/* Section title: */}
      <h2 className="head-text"> Skills & Experience</h2>

      {/* Section content */}
      <div className="skills-and-experience">
        <div className="skills">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills__item"
              key={`${skill.name}-${index}`}
            >
              <div style={{ backgroundColor: skill.bgColor }}>
                <img
                  src={urlFor(skill.icon).url()}
                  alt=""
                  role="presentation"
                />
              </div>
              <p className="skills__text">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-exp experience__list"
        >
          {experiences
            .sort((a, b) => Number(a.index) - Number(b.index))
            ?.map((experience, index) => (
              <div key={index} className="experience__list-item">
                <h3 className="experience__job-position">
                  {experience.jobPosition}{' '}
                  <span className="experience__employer">
                    @{experience.employer}
                  </span>
                </h3>
                <p className="experience__time-period">
                  {experience.timePeriod}
                </p>
                <ul className="experience__desc-list">
                  <li className="experience__desc-list-item">
                    <IoMdArrowDropright />
                    <span className="experience__description">
                      {experience.description}
                    </span>
                  </li>
                  <li className="experience__desc-list-item">
                    <IoMdArrowDropright />
                    <div className="experience__tags">
                      {experience.list?.map((li, index) => (
                        <span key={li} className="">
                          {li}
                        </span>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(SkillsAndExperience, 'app__works'),
  'skills',
  'app__primarybg'
);
