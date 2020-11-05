import React, { Component } from 'react'
import CounterButton from "./CounterButton"



class Counter extends Component {

    constructor() {
        super();//error 1
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }


    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={50} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement} />

                <span className="count" >{this.state.counter}</span>
                <div>
                    <button onClick={this.reset} className="reset">Reset</button>
                </div>

            </div>

        );
    }

    increment(by) { // Update state - counter++
        // console.log('increment');

        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter + by
                }
            });
    }
    decrement(by) { // Update state - counter++
        // console.log('increment');

        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter - by
                }
            });
    }
    reset() {
        this.setState(
            (prevState) => {
                return {
                    counter: 0
                }
            });
    }
}

export default Counter
