import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

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
    return(
        <h1>{props.a} + {props.b} = { props.a + props.b }</h1>
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
        return(
            <h1>{this.props.a} + {this.props.b} = { this.props.a + this.props.b }</h1>
        )
    }
}
class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0}
    }
    render(props) {
        return(
            <div onClick={() => {this.setState({clicks: this.state.clicks + 1})}} >This div cliked {this.state.clicks} times!</div>
        )
    }
}
function render() {
    // ReactDOM.render(<App onClick={()=> {model.times += 1; console.log('Clicked!'); render(); }} times={model.times}/>, document.getElementById('root'));
    // ReactDOM.render(<div>Hello</div>, document.getElementById('root'));
    ReactDOM.render(<Sum  a={2} b={3}></Sum>, document.getElementById('root'));
    // ReactDOM.render(<Person a={2} b={3}></Person>, document.getElementById('root'));
    // ReactDOM.render(<ClickCounter a={2} b={3}></ClickCounter>, document.getElementById('root'));
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
