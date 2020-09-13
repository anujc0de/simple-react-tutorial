import React, { Component } from 'react'

export default class Counter extends Component {
   




    style = {
        fontSize: 10,
        fontWeight: 'bold'

    }
   


    render() {


        return (

            <div>
                {this.props.children}
                <span style={this.style} className={this.getBadge()}>{this.props.value}</span>
                <button onClick={()=>this.props.onIncreament(this.props.id)} className="btn btn-secondary btn-sm">inreament</button>
                <button onClick={()=>this.props.onDelete(this.props.id)} type="button" className="btn btn-danger m-2">Delete</button>
            </div>


        )
    }

    getBadge() {
        let classes = "badge m-2 badge-";
        classes += this.props.value === 0 ? "warning" : "primary"
        return classes
    }


}
