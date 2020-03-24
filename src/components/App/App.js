import React from 'react';
import './App.css';

import Steam from '../util/Steam'


class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      test: "1"
    }

    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(e) {
    alert(Steam.getAccessToken())
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Merbin</h1>
        <p>This program takes data from Steam Web Api</p>
        <button onClick={this.onClickHandler}> Get data</button> 
      </div>
    )
  }
}

export default App;
