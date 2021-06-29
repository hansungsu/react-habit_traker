import React, { Component } from 'react';
import './habit.css';

class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          <i className="fas fa-plus-squre">+</i>
        </button>
        <button className="habit-button habit-decrease">
          <i className="fas fa-plus-squre">-</i>
        </button>
        <button className="habit-button habit-del">
          <i className="fas fa-plus-squre">삭제</i>
        </button>
      </>
    );
  }
}

export default Habit;