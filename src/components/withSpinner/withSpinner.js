import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './StyledWithSpinner';

// WithSpinner component takes a component as an argument and then returns an enhanced version of the component
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
