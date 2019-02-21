import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { string } from 'postcss-selector-parser';
// import Link from 'react-router-dom';

let model = {
    times: 0
};
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
            textarea: ''
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
        console.log(`Submitting...`)
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
                <form action="">
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
const props = { a: 2, b: 3 };
function render() {
    // ReactDOM.render(<App onClick={()=> {model.times += 1; console.log('Clicked!'); render(); }} times={model.times}/>, document.getElementById('root'));
    // ReactDOM.render(<div>Hello</div>, document.getElementById('root'));
    // ReactDOM.render(<Sum  a={2} b={3}></Sum>, document.getElementById('root'));
    // ReactDOM.render(<Sum  {...props}></Sum>, document.getElementById('root'));
    // ReactDOM.render(<SumClicker handleClick={(e)=> {console.log(e); console.log(e.pageX, e.pageY)}}></SumClicker>, document.getElementById('root'));
    // ReactDOM.render(<Events ></Events>, document.getElementById('root'));
    ReactDOM.render(<ECompoment ></ECompoment>, document.getElementById('root'));
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
