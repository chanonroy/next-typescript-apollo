import React, { ComponentType, FunctionComponent } from 'react';


const withPageHoc = () => (
  Component: ComponentType,
) => {
  const WithPage: FunctionComponent = props => {
    return <Component {...props} />
  };

  return WithPage;
};

export default withPageHoc;
