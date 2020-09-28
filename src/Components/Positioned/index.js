import React from 'react'

const Positioned = props => {
    let {
        coordinates = { x: 0, y: 0 },
    } = props
    
    return(
        <div style={{
            position: 'absolute',
            left: `${coordinates.x}%`,
            top: `${coordinates.y}%`,
            transform: 'translateY(-50%) translateX(-50%)',
        }}>
            {props.children}
        </div>
    )
}

export default Positioned