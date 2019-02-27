import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Loading',
    };
  }

  componentDidMount() {
    const API = 'https://hn.algolia.com/api/v1/search?query=redux';

    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;
