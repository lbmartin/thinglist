import React from 'react'
import './ThingList.css'
import Thing from './Thing'

const ThingList = (props) => {
    return(
        <ul className="ThingList">
            { 
                Object
                  .keys(props.things)
                  .map(thingId => <Thing key={thingId} thing={props.things[thingId]} onChange={props.onChange} />) 
            }
        </ul>
    )

}

export default ThingList