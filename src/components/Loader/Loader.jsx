import { ColorRing } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['blue', 'blue', 'blue', 'blue', 'blue']}
      />
    </div>
  );
};
