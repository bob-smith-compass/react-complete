import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { string } from 'postcss-selector-parser';
// import Link from 'react-router-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
// import { setInterval } from 'timers'; // without this will also work

let model = {
    running: false,
    times: 0,
    // time: new Date()
    time: 100
};
const update = (model, intent) => {
    const updates = {
        'START': (model) => Object.assign(model, {running: true}),
        'STOP': (model) => Object.assign(model, {running: false}),
        'TICK': (model) => Object.assign(model, {time: model.time + 1})
    };
    return updates[intent](model);
}
setInterval(()=> {
    model = update(model, 'TICK');
    render();
}, 1000);
/** TypeScrip and Flow static type checking */
// interface SumProps {
//     a: number,
//     b: number,
// }
/**
 * React function component
 */
// function Sum(props: SumProps) {
function Sum(props) {
    return (
        <h1 >{props.a} + {props.b} = {props.a + props.b}</h1>
    )
}
// function Sum(props: SumProps) {
function SumClicker({ handleClick }) {
    return (
        <div>
            <button onClick={(e) => { handleClick('A'); }}>A</button>
            <button onClick={(e) => { handleClick('B'); }}>Pass data as props: B</button>
            <button onClick={(e) => { handleClick(e); }}>Pass data as props</button>
        </div>
    )
}
function TicTacTo(numOfSquares, onSelection) {
    console.log(numOfSquares);
    console.log(onSelection);
    // sudo yard add underscore
    const makeSquares = v => <button key={v} id={v} onClick={event => {
        onSelection(event.target.id)
    }}>{v}</button>;
    return (
        <div>
            {/* {_.range(1, numOfSquares + 1).map(makeSquares)} */}

            {/* for (let i = 0; i < numOfSquares; i++) {
                makeSquares(i);
            } */}
            <button>{numOfSquares}</button>
        </div>
    )
}
Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
}
/**
 * React class component
 */
class Person extends React.Component {
    render(props) {
        return (
            <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>
        )
    }
}
class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 }
    }
    render(props) {
        return (
            <div onClick={() => { this.setState({ clicks: this.state.clicks + 1 }) }} >This div cliked {this.state.clicks} times!</div>
        )
    }
}
let state = { value: 'David' };
function Events(props) {
    const clickHandler = function (e) {
        console.log(e)
        // console.log(name);
    }
    const inputClick = function (e) {
        console.log(e.pageX, e.pageY);
        e.preventDefault();
    }
    const onGoTime = function (e) {
        console.log(e);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onGoTime}>
                <input Ref="name"
                    onClick={inputClick} type="text" />
                <input Ref="name"
                    value={state.value}
                    onClick={inputClick} type="checkbox" />
                <button onClick={clickHandler}>Make event</button>
            </form>
            <button onClick={onGoTime} type="submit">Subbmit</button>
        </div>
    )
}

class ECompoment extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            fname: 'David', 
            lname: 'Shams',
            clicked: 0,
            textarea: '',
            data: []
         }
        this.onChar = this.onChar.bind(this)
        this.onEven = this.onEven.bind(this)
        this.textChange = this.textChange.bind(this)
        // this.propTypes = PropTypes({
            // fname: string
        // })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Submitting...`);
        // this.setState({
        //     data: this.state.concat(this.state.fname)
        // })
        // console.log(this.state.fname); // error
        console.log(e.target.value);
    }
    onChar(e) {
        this.setState({fname: e.target.value})
        console.log(e.target.value); // Get the letter pressed
    }
    onEven(e) {
        this.setState({clicked: this.state.clicked + 1});
        console.log(`Clicked ${this.state.clicked} times.`);
    }
    textChange(e) {
        console.log(e.target.value);
        this.setState({textarea: e.target.value})
    }
    render(props) {
        return (
            <div>
                <h3> EComponent </h3>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChar} value={this.state.fname} type="text"/>
                <input onClick={this.onEven} onChange={this.onChar} value={this.state.lname} type="text"/>
                <textarea name="" id="" cols="30" rows="10">
                HTML 
                </textarea>
                {/* <textarea onChange={this.textChange} value={this.state.fname + ' ' + this.state.lname} name="" id="" cols="30" rows="10"></textarea> */}
                <textarea onChange={this.textChange} value={this.state.textarea} name="" id="" cols="30" rows="10"></textarea>
                <Data fname={'David'} lname={'Shams'}/>
                <button onSubmit={this.handleSubmit} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
function Data({fname, lname}) {
    return(
        <div>{fname}-{lname}</div>
    )

}
/**
 * View Function
 */
const view = (model) => {
    let minutes = Math.floor(model.time/60);
    let seconds = model.time - (minutes * 60);
    function handleClic(e) {
        console.log('Stopping');
        // this.setState({running: false}); // Not here will not work
        model = update(model, model.running? 'STOP': 'START');

    }
    return(
        <div>
            <div>{minutes}:{seconds}</div>
            <button onClick={handleClic}>{model.running? 'Start' :'Stop'}</button>
        </div>
    )
};

let intents = {
    TICK: 'TICK',
    START: 'START',
    STOP: 'STOP',
    RESET: 'RESET'
}
/**
 * Redux
 */
// let container = Redux.createStore(model);

const props = { a: 2, b: 3 };

/**
 * Fetch data from REST API
 */
/* eslint-disable no-undef */
function search(query, cb) {
    alert('Fetching...');
    return fetch(`https://restcountries.eu/rest/v2/name/${query}`, {
      accept: "application/json"
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(cb);
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
  
  function parseJSON(response) {
      console.log(response);
    return response.json();
  }
  
  const Client = { search };
  export default Client;
 // end fetch data
 Client.search('canada', console.log(response));

/**
 * Full example fetch
 */
/*
class App extends React.Component {
  
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

ReactDOM.render(<App/>,document.getElementById('app'));
*/
 // end example


function render() {
    // ReactDOM.render(<App onClick={()=> {model.times += 1; console.log('Clicked!'); render(); }} times={model.times}/>, document.getElementById('root'));
    // ReactDOM.render(<div>Hello</div>, document.getElementById('root'));
    // ReactDOM.render(<Sum  a={2} b={3}></Sum>, document.getElementById('root'));
    // ReactDOM.render(<Sum  {...props}></Sum>, document.getElementById('root'));
    // ReactDOM.render(<SumClicker handleClick={(e)=> {console.log(e); console.log(e.pageX, e.pageY)}}></SumClicker>, document.getElementById('root'));
    // ReactDOM.render(<Events ></Events>, document.getElementById('root'));
    // ReactDOM.render(<ECompoment ></ECompoment>, document.getElementById('root'));
    // ReactDOM.render(view(model), document.getElementById('root'));
    /**
     * fetch
     */
    ReactDOM.render(<App/>, document.getElementById('root'));

    // ReactDOM.render(<BroswerRouter> <ECompoment ></ECompoment></BrowserRouter>, document.getElementById('root'));
    // ReactDOM.render(<TicTacTo numOfSquares={6} onSelection={(e)=> {console.log(e); console.log(e.pageX, e.pageY)}}></TicTacTo>, document.getElementById('root'));
    // ReactDOM.render(<Person a={2} b={3}></Person>, document.getElementById('root'));
    // ReactDOM.render(<ClickCounter a={2} b={3}></ClickCounter>, document.getElementById('root'));
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
