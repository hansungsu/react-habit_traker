import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>Habit Traker <span>{this.props.totalCount}</span></h1>
      </div>
    );
  }
}

export default Nav;
