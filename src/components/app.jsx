import React, { Component } from 'react';
import Search from './search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {}
  }

  render() {
    return (
      <div>
        Hello, {this.props.name}
        <div className="left-scene">
          <Search />
        </div>

        <div className="right-scene">
          Right Scene
          <div className="gif-list">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
