import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "../css/Counter.css"

class CounterButton extends Component {


    //Define the initial state in a constructor
    // state => counter 0
    // constructor() {
    //     super();//error 1
    // this.state = {
    //     counter: 0
    // }
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }



    render() {
        // const style = { fontSize : "50px", padding: "15px 30px"};
        return (
            <div className="counterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }

    // increment() { // Update state - counter++


    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });
    //     this.props.incrementMethod(this.props.by);

    // }

    // decrement() { // Update state - counter++


    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     });
    //     this.props.decrementMethod(this.props.by);

    // }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.array
}
export default CounterButton
