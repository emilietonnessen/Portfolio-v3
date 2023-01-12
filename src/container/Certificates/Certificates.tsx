import { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import './Certificates.scss';
import { motion } from 'framer-motion';

interface CertificatesProps {
  imgUrl: any;
  link: string;
  title: string;
  _id: string;
}

const Certificates = () => {
  const [certificates, setCertificates] = useState<CertificatesProps[]>([]);

  // Fetch Certificates
  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then((data: CertificatesProps[]) => {
      setCertificates(data);
    });
  }, []);

  return (
    <div className="certificates">
      <h2 className="head-text">Certificates</h2>
      <ul className="certificates__list">
        {certificates.map((certificate) => (
          <motion.li
            whileHover={{ scale: [1, 1.075] }}
            transition={{ duration: 0.25 }}
            key={certificate._id}
            className="certificates__list-item"
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
              <h3 className="certificates__card-title">{certificate.title}</h3>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AppWrap(MotionWrap(Certificates), 'certificates', 'app__darkbg');
