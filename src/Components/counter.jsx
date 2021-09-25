import React, { Component } from 'react'

class Counter extends Component {
    state = { value : this.props.counter.value}
    handleIncrement =() => {
        this.setState({value : this.state.value + 1});
    }
    formatCount(){
        const { value} = this.state;
        return value === 0 ? "Zero" : value;
    }
    getBage(){
        let clasess = "badge m-3 badge-"
        return clasess += this.state.value ===0 ? "warning" : "primary"
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                {/* {this.props.children} */}
            <span className={this.getBage()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() =>this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        )
    }
}

export default Counter;