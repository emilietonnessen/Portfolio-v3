import { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import './Certificates.scss';

interface CertificatesProps {
  title: string;
  description: string;
  imgUrl: any;
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

  console.log('[certificates]', certificates);
  return (
    <div className="certificates">
      <h2 className="head-text">Certificates</h2>
      <ul className="certificates__list">
        {certificates.map((certificate) => (
          <li className="certificates__list-item">
            <div className="certificates__card">
              <img
                src={urlFor(certificate.imgUrl).url()}
                alt={certificate.title}
              />
              <h3 className="certificates__card-title">{certificate.title}</h3>
              {/* <p className="certificates__card-description">
                {certificate.description}
              </p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppWrap(MotionWrap(Certificates), 'certificates', 'app__darkbg');
