import './ErrorBox.scss';
import { VscError } from 'react-icons/vsc';

const ErrorBox = ({ message }: { message: string }) => {
  return (
    <div className="error-box">
      <VscError fontSize={20} />
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;
