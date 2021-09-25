import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
        handleDelete = (id)=>{
            // console.log('Counter handle Delete', id);
            const setCounters = this.state.counters.filter(counts=>counts.id !== id); 
            this.setState({counters : setCounters});
        }

        handleReset = () =>{
            const setReset = this.state.counters.map((counts) => {counts.value = 0 ; return counts} );
            this.setState( { counters : setReset})
        }
    render() {
        return (
            <div>
             <butoon className="btn btn-primary btn-md" onClick={this.handleReset}>Reset</butoon>  
                {
                    this.state.counters.map((counter) =>
                        <Counter
                            key={counter.id}
                            counter ={counter} onDelete={this.handleDelete}>
                                {/* <h3>titile</h3> */}
                        </Counter>)
                }
            </div>
        )
    }
}

export default Counters;