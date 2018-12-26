import React from 'react';

const Wrapper = ({ small = false, children }) => (
  <div className={`form-columns ${small && 'small-cols'}`}>
    {children}
  </div>
);

export default Wrapper;
