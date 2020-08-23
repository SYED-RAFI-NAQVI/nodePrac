import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/cardlist.component.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" >
        <CardList monsters={this.state.monsters} />
      </div >
    );
  }
}

export default App;
