import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }



  render() {

    return (
      <div>
        <Home/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
