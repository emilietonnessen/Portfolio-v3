import { VscError } from 'react-icons/vsc';

import './ErrorBox.scss';

const ErrorBox = ({ message }: { message: string }) => {
  return (
    <div className="error-box">
      <VscError fontSize={20} />
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;
