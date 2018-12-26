import React from 'react';

const Item = ({ children }) => (
  <div className="form-col">
    <div className="form-group">
      {children}
    </div>
  </div>
);

export default Item;
