import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import './Certificates.scss';
import AppWrap from '../../wrapper/AppWrap';
import ErrorBox from './../../components/ErrorBox/ErrorBox';
import MotionWrap from '../../wrapper/MotionWrap';
import Spinner from '../../components/Spinner/Spinner';
import { client, urlFor } from '../../client';

interface CertificatesProps {
  imgUrl: any;
  link: string;
  title: string;
  _id: string;
}

const Certificates = () => {
  const [certificates, setCertificates] = useState<CertificatesProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Fetch Certificates
  useEffect(() => {
    if (!certificates.length) {
      setIsLoading(true);
      setIsError(false);

      const query = '*[_type == "certificates"]';

      client
        .fetch(query)
        .then((data: CertificatesProps[]) => {
          setCertificates(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className="certificates" aria-live="polite">
      <h2 className="head-text">Certificates</h2>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorBox message="Unable to load certificates. Please try again later." />
      ) : (
        <ul className="certificates__list">
          {certificates.map((certificate) => (
            <motion.li
              whileHover={{ scale: [1, 1.075] }}
              transition={{ duration: 0.25 }}
              key={certificate._id}
            >
              <a
                className="certificates__card"
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                title="Open link to course, new window"
              >
                <img
                  src={urlFor(certificate.imgUrl).url()}
                  alt=""
                  role="presentation"
                />
                <h3>{certificate.title}</h3>
              </a>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppWrap(MotionWrap(Certificates), 'certificates', 'app__darkbg');
