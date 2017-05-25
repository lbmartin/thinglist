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

  handleChange = (ev) => {
    const { thing, saveThing } = this.props
    const field = ev.currentTarget.getAttribute('name')
    thing[field] = ev.target.value
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
            name="name"
            html={thing.name} 
            onChange={this.handleChange} 
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input} 
            />
            <input name="dueOn" defaultValue={thing.dueOn} onChange={this.handleChange} type="date"/>
            <Actions thing={thing} removeThing={removeThing} />
          </div>
          
        </li>
    )
  }
}

export default Thing