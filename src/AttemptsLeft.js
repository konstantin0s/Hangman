import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

import './AttemptsLeft.css';

class AttemptsLeft extends Component {
  render() {
    return (
      <div className="AttemptsLeft">
        <span>Guesses Left: <span className="AttemptsLeft-Number">
            {this.props.attempts}
          </span>
        </span>
      </div>
    );
  }
};

AttemptsLeft.propTypes = {
  attempts: PropTypes.number.isRequired,
};

export default AttemptsLeft;
