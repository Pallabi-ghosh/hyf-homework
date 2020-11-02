import React, {Component} from 'react';


const URL = 'https://developer.github.com/v3/users/#get-a-single-user';

class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(results => results.json())
      .then(data => this.setState({ results: data[0]}));
  }

  render() {
    console.log(this.state.results);
    return (
      <div>
        {this.state.results}
      </div>
    );
  }
}

export default Result;