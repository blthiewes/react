//starting point for react app
import ReactDOM from 'react-dom';

import React, {Component} from 'react';

class App extends Component {
  state = {
    answer: 45,
  };

  asyncFunc = () => {
    return Promise.resolve(36);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc(),
    });
  }

  render() {
    return <h2>Hello Class Component -- {this.state.answer}</h2>;
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
