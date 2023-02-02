import { Oval } from 'react-loader-spinner';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Oval
        height={80}
        width={80}
        color="#0097fe"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="loading"
        secondaryColor="#0454a0"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
};

export default Spinner;
