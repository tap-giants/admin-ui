import React from 'react';

const Wrapper = ({ children }) => <div className="process">{children}</div>;
const Stage = ({ label, className, children }) => (
  <div className={`process-stage ${className}`}>
    <div className="process-label">{label}</div>
    <div className="process-title">{children}</div>
  </div>
);

export default {
  Wrapper,
  Stage
};
