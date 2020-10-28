import React from 'react';
import './App.css';
import Result from './MyResult';


class App extends React.Component {
  state = {
    users: [],
    loading: false
  };

  searchUser = event => {
    console.log(event);
    const query = event.target.value;
    if (query !== "") {
      this.setState({ loading: true });
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(users => {
          this.setState({ users: users.items });
          this.setState({ loading: false });
        })
        .catch(error => {
          alert(
            "An error occurred while trying to fetch data from Foursquare: " +
              error
          );
        });
    }
    window.gm_authFailure = () => {
      alert("An error occurred while trying to load Google Map");
    };
  }

  render() {
    console.log(this.state.users);
    console.log(this.state.results);
    return (
      <div className="App">
        <h1>Github user searcher</h1>
        <input placeholder="Search for user" onChange={this.searchUser} />
        <br />
        <br />
        {this.state.loading ? "loading" : ""}
        <br />
        <br />
        {this.state.users && this.state.users.length === 0
          ? "No results"
          : this.state.users.map(user => <div>{user.login}</div>)}
          <Result />
      </div>
      );
  }
}


export default App;
