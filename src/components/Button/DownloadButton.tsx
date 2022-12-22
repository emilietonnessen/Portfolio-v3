import { ReactNode } from 'react';

const DownloadButton = ({
  downloadPath,
  children,
  variant,
}: {
  downloadPath: string;
  children: ReactNode;
  variant: 'primary' | 'secondary';
}) => {
  return (
    <a href={downloadPath} download className={`button button__${variant}`}>
      {children}
    </a>
  );
};

export default DownloadButton;
