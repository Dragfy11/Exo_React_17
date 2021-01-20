import React from 'react'

function Bouton(props) {
    return (
        <div>
            <input type="button" value="incrémentez de 4" onClick={()=>props.incr(4)}/>
        </div>
    )
}

export default Bouton
