import React from 'react'

import './SignOut.css'

const SignOut = ({ signOut }) => {
    return(
        <button onClick={signOut} className="SignOut">
          Sign Out With GitHub
        </button>
    )

}

export default SignOut