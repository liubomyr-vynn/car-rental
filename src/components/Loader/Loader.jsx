import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderSpinner className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderSpinner>
  );
};

export default Loader;
