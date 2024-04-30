import './Counter.css'

import { Component } from 'react';

class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.step || 5
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (event) => {
        this.setState({
            step: +event.target.value
        })
    }

    render() {
        return (
            <div className='Counter'>
                <h2>Counter</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="stepInput">Step: </label>
                    <input id="stepInput" type="number" value={this.state.step} onChange={this.setStep} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Counter;