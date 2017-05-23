import React from "react"
import './AddButton.css'

const AddButton = (props) => {
    return(
      <div>
        <button className="logout">Sign Out</button>
        <button className="add-thing" onClick={props.addThing}>Add Thing</button>
      </div>
    )
}

export default AddButton