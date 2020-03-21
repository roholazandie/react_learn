import React, {Component} from "react";
import Counter from "./counter";


class Counters extends Component{

    // componentDidMount(prevProps, prevState) {
    //     console.log("prevProps", prevProps);
    //     console.log("prevState", prevState);
    //     if(prevState.counter.value !== this.props.counter.value){
    //         //ajax call and get new data from the server
    //     }
    // }
    //
    // componentWillMount() {
    //     console.log("Counter Unmount")
    // }

    render() {
        //destructuring arguments
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                {counters.map(counter => (
                    <Counter key={counter.id}
                             onDelete={onDelete}
                             onIncrement={onIncrement}
                             counter = {counter}
                    >
                        <h4>
                            Counter {counter.id}
                        </h4>
                    </Counter>))}
            </div>
        );
    }
}

export default Counters