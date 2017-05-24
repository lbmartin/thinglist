import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'
import Actions from './Actions'

import './Thing.css'


class Thing extends Component {
  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.currentTarget.value
    saveThing(thing)
  }
render() {
  const { thing, saveThing, removeThing } = this.props
    return (
        <li className="Thing" contentEditable>
        <input type="checkbox" value="on" />
          <div className="details">
            <ContentEditable className="name" html={thing.name} onChange={this.updateName} />
            <Actions thing={thing} removeThing={removeThing} />
          </div>
        </li>
    )
  }
}

export default Thing