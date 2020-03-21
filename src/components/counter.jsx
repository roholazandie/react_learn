import React, {Component} from "react";

class Counter extends Component{
    // constructor() {
    //     super();
    // }

    //states are private to the component
    //props are read-only

    //the component that owns a piece of the state should be the one modifying it

    // state = {
    //     value: this.props.counter.value,
    //     tags: [
    //         'tag1','tag2', 'tag3'
    //     ]
    //     //imageUrl: 'https://picsum.photos/200'
    // };

    styles = {
      fontSize: 10,
      fontWeight: 'bold'
    };

    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There are not tags!</p>
    //
    //     return (<ul>
    //         {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //     </ul>);
    // }

    // handleIncrement = product =>{
    //   console.log(product);
    //   this.setState({value: this.state.value +1});
    // };


    render() {
        //this line takes all the methods and objects we want from this.probs and put it in the new obj
        const {onIncrement, onDelete, counter} = this.props;
        return (
        <div>
            {/*{this.props.children}*/}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => onIncrement(counter)}
                className="btn btn-dark btn-sm">
                Increment
            </button>
            <button
                onClick={() => onDelete(counter.id)}
                className="btn btn-sm btn-danger m-2">
                Delete
            </button>
            {/*{this.renderTags()}*/}

        </div>);
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses(){
        let classes = "badge m-2 ";
        classes += this.props.counter.value===0 ? "badge-warning" : "badge-primary";
        return classes
    }
}

export default Counter;