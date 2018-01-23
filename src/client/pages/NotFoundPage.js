import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
  staticContext.notFound = true;
  return <h3 className="center">Well this is awkward...</h3>;
};

export default {
  component: NotFoundPage
};
