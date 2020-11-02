// import React from 'react';
// import './App.css';
// import Result from './MyResult';


// class App extends React.Component {
//   state = {
//     users: [],
//     loading: false
//   };

//   searchUser = event => {
//     console.log(event);
//     const query = event.target.value;
//     if (query !== "") {
//       this.setState({ loading: true });
//       fetch(`https://developer.github.com/v3/users/#get-a-single-user=${query}`)
//         .then(response => response.json())
//         .then(users => {
//           this.setState({ users: users.items });
//           this.setState({ loading: false });
//         })
//         .catch(error => {
//           alert(
//             "An error occurred while trying to fetch data from Foursquare: " +
//               error
//           );
//         });
//     }
//     window.gm_authFailure = () => {
//       alert("An error occurred while trying to load Google Map");
//     };
//   }

//   render() {
//     console.log(this.state.users);
//     console.log(this.state.results);
//     return (
//       <div className="App">
//         <h1>Github user searcher</h1>
//         <input placeholder="Search for user" onChange={this.searchUser} />
//         <br />
//         <br />
//         {this.state.loading ? "loading" : ""}
//         <br />
//         <br />
//         {this.state.users && this.state.users.length === 0
//           ? "No results"
//           : this.state.users.map(user => <div>{user.login}</div>)}
//           <Result />
//       </div>
//       );
//   }
// }


// export default App;

import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
