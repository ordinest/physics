import React from 'react'
import Positioned from 'Components/Positioned'

const Source = ({
    coordinates,
    color,
    border,
    glow,
}) => {
    return (
        <Positioned coordinates={coordinates}>
            <div
                className='source'
                style={{
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    background: `${color}`,
                    borderColor: `${border}`,
                    boxShadow: `${glow} 0 0 12px 12px`,
                }}
            />
        </Positioned>
    )
}

export default Source