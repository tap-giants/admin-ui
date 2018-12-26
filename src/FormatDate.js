import React from 'react';
import moment from 'moment';

const FormatDate = ({ format, children }) => {
  return (
    <span className="format-date">{moment(children).format(format)}</span>
  );
}

FormatDate.defaultProps = {
  format: 'll',
};

export default FormatDate;