import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'
import Actions from './Actions'

class App extends Component {

  constructor(){
    super()
    this.thingCounter = 0
    this.state = {
      things: {},
    }
    this.addThing = this.addThing.bind(this)
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
    }
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

  removeThing = (thing) => {
    const things = {...this.state.things}
    delete things[thing.id]
    this.setState ({ things })
  }

  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }
    return (
      <div className="App">
        <Header />
        <AddButton addThing={this.addThing}/>
        <ThingList things={this.state.things} 
                    saveThing={this.saveThing} 
                    {...actions} />
      </div>
    )
  }
}

export default App;
