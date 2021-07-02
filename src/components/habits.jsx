import React, { Component } from 'react';
import Habit from "./habit";

class Habits extends Component {

  handleIncreament = (anyName) => {
    this.props.onIn(anyName)
  }

  handleDecreament = (anyName) => {
    this.props.onDe(anyName)
  }

  handleDelete = (anyName) => {
    this.props.onDelete(anyName)
  }
  
  render() {
    return (
      <ul>
        {
          this.props.habits_state.map(
            habits_state_map => (
              <Habit 
                key={habits_state_map.id} 
                habits_props={habits_state_map} //map으로 돌린 habits의 state를 가져옴.
                onIn = {this.handleIncreament}
                onDe = {this.handleDecreament}
                onDelete = {this.handleDelete}
              />
            )
          )
        }
      </ul>
    );
  }
}

export default Habits;