import React from 'react'
import Positioned from 'Components/Positioned'

const Grate = ({
    coordinates = { x: 0, y: 0 },
}) => {
    return (
        <Positioned coordinates={coordinates}>
            <div
                className='grate'
                style={{
                    width: '4px',
                    height: '400px',
                    background: 'gray',
                }}
            />
        </Positioned>
    )
}

export default Grate