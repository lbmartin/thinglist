import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'

class App extends Component {

  constructor(){
    super()
    this.thingCounter = 0
    this.state = {
      things: {},
    }
    this.addThing = this.addThing.bind(this)
  }

saveThing = (thing) => {
  const things = {...this.state.things}
  things[things.Id] = thing
  this.setState({ things })
}

  addThing(ev){
    ev.preventDefault()
    let id = this.thingCounter++
    const things = {...this.state.things}
    things[id] = {id: id, name: "New Thing"}
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddButton addThing={this.addThing}/>
        <ThingList things={this.state.things} saveThing={this.saveThing} />
      </div>
    )
  }
}

export default App;
