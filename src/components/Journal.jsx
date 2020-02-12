import React from 'react';
import PropTypes from 'prop-types';

function Journal(props){
  return (
    <div>
      <h3>{props.author} - {props.date}</h3>
      <p><em>{props.entry}</em></p>
      <hr/>
    </div>
  );
}

Journal.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  entry: PropTypes.string
};

export default Journal;
