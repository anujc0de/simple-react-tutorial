import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }]
}
  handleDelete = (id) => {
      
    const counters=this.state.counters.filter(counter=>counter.id!==id)
    this.setState({counters:counters})

}

handleIncreament = (id) => {
    console.log(id);
    const counters=this.state.counters.map(counter=>{
        if (counter.id===id) {
            counter.value++;
            
        }
        return counter
    })
    this.setState({counters})


}
reset=()=>{
    const counters=this.state.counters.map((c)=>{
        c.value=0
        return c
    })
    this.setState({counters})
}


  render() {
    return (
      <React.Fragment>
        <NavBar total={this.state.counters.filter(c=>c.value>0).length} />
        <main className="container">
        < Counters onDelete={this.handleDelete} onIncreament={this.handleIncreament} reset={this.reset}  counters={this.state.counters}/>
        </main>
      </React.Fragment>
    );
  }



}

export default App;
