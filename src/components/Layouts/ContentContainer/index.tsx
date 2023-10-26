import React, { PropsWithChildren } from 'react';

const ContentContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-1 p-10">{children}</div>;
};

export default ContentContainer;
