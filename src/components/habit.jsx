import React, { Component } from 'react';
import './habit.css';

class Habit extends Component {

  /*
  habits_props = [
    {id : 1, name : 'Reading', count : 0},
    {id : 2, name : 'Running', count : 0},
    {id : 3, name : 'Coding', count : 0},
  ]
  */

  handleIncreament = () => {
    this.props.onIn(this.props.habits_props)
  }

  handleDecreament = () => {
    this.props.onDe(this.props.habits_props)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habits_props)
  }


  render() {
    const { name, count } = this.props.habits_props;
    return (
      <div>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncreament}>
          <i className="fas fa-plus-squre">+</i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecreament}>
          <i className="fas fa-plus-squre">-</i>
        </button>
        <button className="habit-button habit-del" onClick={this.handleDelete}>
          <i className="fas fa-plus-squre">삭제</i>
        </button>
      </div>
      
    );
  }
}

export default Habit;