
import React, { Component } from 'react';
import Habits from "./components/habits";
import Nav from "./components/nav";
import HabitForm from "./components/habit_form";


class App extends Component {
  state = {
    habits_state: [
      {id : 1, name : 'Reading', count : 0},
      {id : 2, name : 'Running', count : 0},
      {id : 3, name : 'Coding', count : 0},
    ]
  }

  handleIncreament = (anyName) => {
    //state 안에있는 count update 후 state 를 업데이트 
    const habit_spread = [...this.state.habits_state] //spread 배열 생성
    const index = habit_spread.indexOf(anyName) //spread배열에 지금의 함수를 실행시킨 배열을 찾는다.
    habit_spread[index].count++ //해당 배열의 찾은 index의 count state를 증가
    this.setState({habits_state : habit_spread}) //증가된 state 를 setState로  새로운 배열과 기존의 배열을 동일화 한다. { key : new value }
  }

  handleDecreament = (anyName) => {
    const habit_spread = [...this.state.habits_state]
    const index = habit_spread.indexOf(anyName)
    const count = habit_spread[index].count - 1
    habit_spread[index].count = count < 0 ? 0 : count //new value 의 count 의 count가 0 보다 작다면 0을 count에 출력해라. 
    //count < 0 ? 0 : count = if (count < 0 ) { 0 } else { count }
    //--> *좋지못한 코드 예제다.
    this.setState({habits_state : habit_spread})
  }

  handleDelete = (anyName) => {
    const habit_delete = this.state.habits_state.filter(item => item.id !== anyName.id) //state의 목록에서 delete함수가 실행된 id와 다른 id들만 고른다.
    this.setState({habits_state : habit_delete}) //filter된 변수를 기존 state에 반영
  }

  handleAdd = anyName => {
    const habit_spread = [...this.state.habits_state, {id: Date.now(), name : anyName, count:0}]
    this.setState({habits_state : habit_spread})
    
  }

  handleReset = () => {
    const habitReset = this.state.habits_state.map(habit => {
      habit.count = 0
      return habit
    })
    this.setState({habits_state : habitReset})
  }

  render() {
    return(
      <>
        <Nav totalCount={this.state.habits_state.filter(item=> item.count > 0).length}/>
        <HabitForm onAdd={this.handleAdd}/>
        <Habits 
          habits_state={this.state.habits_state}
          onIn = {this.handleIncreament}
          onDe = {this.handleDecreament}
          onDelete = {this.handleDelete}
        />
        <button onClick={this.handleReset}>리셋</button>
      </>
    );
  }
}

export default App;
