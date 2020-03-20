import React, {Component} from "react";

class Counter extends Component{
    // constructor() {
    //     super();
    // }

    //states are private to the component
    //props are read-only

    //the component that owns a piece of the state should be the one modifying it

    state = {
        value: this.props.counter.value,
        tags: [
            'tag1','tag2', 'tag3'
        ]
        //imageUrl: 'https://picsum.photos/200'
    };

    styles = {
      fontSize: 10,
      fontWeight: 'bold'
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are not tags!</p>

        return (<ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>);
    }

    handleIncrement = product =>{
      console.log(product);
      this.setState({value: this.state.value +1});
    };


    render() {
        console.log(this.props);

        return (
        <span>
            {/*{this.props.children}*/}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.handleIncrement({id: 1})}
                className="btn btn-dark btn-sm">
                Increment
            </button>
            <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-sm btn-danger m-2">
                Delete
            </button>
            {this.renderTags()}

        </span>);
    }

    formatCount(){
        return this.state.value === 0 ? 'Zero' : this.state.value;
    }

    getBadgeClasses(){
        let classes = "badge m-2 ";
        classes += this.state.value===0 ? "badge-warning" : "badge-primary";
        return classes
    }
}

export default Counter;