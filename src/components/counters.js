import React, { Component } from 'react'
import Counter from './counter';

export default class Counters extends Component {



    render() {
        const { onDelete, reset, onIncreament } = this.props
        return (
            <div >
                <button type="button" className="btn btn-primary" onClick={reset}>Reset</button>
                {this.props.counters.map(counter => <Counter key={counter.id} onDelete={onDelete}
                    onIncreament={onIncreament} value={counter.value} id={counter.id}>
                    <h6> Counter #{counter.id}</h6> </Counter>)}

            </div>
        )
    }
}
