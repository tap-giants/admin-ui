import React from 'react';

const PageTitle = ({ title, children }) => {
  return (
    <div className="page-title">
      {children && children}
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default PageTitle;
