import React from "react"
import './AddButton.css'

const AddButton = ({ addThing }) => {

  return <button className="add-thing" onClick={addThing}>Add Thing</button>

}

export default AddButton