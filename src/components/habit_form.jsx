import React, { Component } from 'react';

class HabitForm extends Component {
  inputRef = React.createRef()
  onSubmit = e => {
    e.preventDefault()
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    this.inputRef.current.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          ref={this.inputRef}
          type="text" 
          placeholder="습관을 입력하세요." 
        />
        <button>추가</button>
      </form>
    );
  }
}

export default HabitForm;