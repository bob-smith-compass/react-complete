import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
// import Route from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//             <div onClick={this.props.onClick}>This div cliked {this.props.times} times!</div>
//             <Login 
//             username="jdoe"
//             password="pass"
//             now={new Date().toISOString()} />
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         {/* <Route exact path = '/about' ></Route> */}
//       </div>
//     );
//   }
// }

// export default App;


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      repos: []
    };
  }
  
  handleSearch = (user) =>{
    let url = 'https://api.github.com/users/'+user+'/repos';
 fetch(url).
  then(response => response.json()).then((repos) => {
      console.log(repos);
      console.log(repos.length);
      this.setState({
        repos: repos
      });
    });
  };
  
  render(){
    return (
      <div className="app-container">
        <h3>React fetch example</h3>
        <SearchBar handleSubmit={this.handleSearch} />
        <RepoList repos={this.state.repos}/>
      </div>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
    
  handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    this.props.handleSubmit(text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          className="form-control"
          type="text"
          placeholder="Type github user and press ENTER"
        />
      </form>
    );
  }
}


class RepoList extends React.Component {

  render(){
    var rows = [];
      this.props.repos.map((repo,index) => rows.push(<RepoItem key={index} repo={repo} />))
    return (
      <div className="list-group">
        {rows}
      </div>
    )
  }
}
RepoList.defaultProps = {
  repos: []
};

class RepoItem extends React.Component {
  render(){
    return (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{this.props.repo.name}</h5>
      <small>{new Date(Date.parse(this.props.repo.created_at)).toLocaleDateString()}</small>
    </div>
    <p className="mb-1">{this.props.repo.description}</p>
    <small>{this.props.repo.html_url}</small>
  </a>
    )
  }
}

export default App;

// ReactDOM.render(<App/>,document.getElementById('app'));