import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'
import Actions from './Actions'

import './Thing.css'


class Thing extends Component {

  componentDidMount() {
    if(!this.nameInput.htmlEl.textContent) {
    this.nameInput.htmlEl.focus()
    }
  }

  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

blurOnEnter = (ev) => {
  if (ev.key === 'Enter') {
    ev.preventDefault()
    ev.target.blur()
  }
}

crossed = (ev) => {
  const { thing, saveThing, crossThing } = this.props
  console.log('fun')
  if(thing.crossed===true)
  thing.crossed = false
  else
  thing.crossed = true
  saveThing(thing)
  //crossThing(thing)
}

render() {
  const { thing, removeThing } = this.props

    return (
        <li className="Thing">
        <input type="checkbox" value="on" onChange={this.crossed} checked={thing.crossed} />
          <div className="details">
            <ContentEditable 
            className="name" 
            html={thing.name} 
            onChange={this.updateName} 
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input} 
            />
            <Actions thing={thing} removeThing={removeThing} />
          </div>
        </li>
    )
  }
}

export default Thing