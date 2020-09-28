import React from 'react'
import { wavelengthToColor, diffractionHeight } from 'Utilities/spectralUtilities'

const Rays = props => {
    const {
        coordinates,
        sourceCoordinates,
        screenCoordinates,
        screenHeight,
        screenDistance,
        gratePosition,
        diffractionSpacing,
    } = props

    const style = {
        position: 'absolute',
        top: `${coordinates.x}%`,
        transform: 'translateY(-50%)',
        width: '100%',
        height: `${screenHeight}px`,
        stroke: 'white',
        strokeDasharray: '4px',
    }
    const sourceRayStyle = {
        position: 'absolute',
        left: `${sourceCoordinates.x}%`,
        width: `${gratePosition - sourceCoordinates.x}%`,
        height: '100%',
    }
    const diffractedRaysStyle = {
        position: 'absolute',
        right: `${100 - screenCoordinates.x}%`,
        width: `${screenCoordinates.x - gratePosition}%`,
        height: '100%',
    }
    
    return (
        <div style={style}>
            <svg style={sourceRayStyle}>
                <line x1="0" y1="50%" x2='100%' y2="50%" />
            </svg>
            <svg style={diffractedRaysStyle}>
                <line x1="100%" y1="50%" x2="0" y2="50%" />
                {props.lines.map(dline => (
                    <React.Fragment key={dline}>
                        <line
                            x1="100%"
                            y1={`${(screenHeight / 2 - diffractionHeight(screenDistance, dline, diffractionSpacing)) / screenHeight * 100}%`}
                            x2="0"
                            y2="50%"
                            style={{ stroke: wavelengthToColor(dline)[0] }}
                        />
                        <line
                            x1="100%"
                            y1={`${100 - (screenHeight / 2 - diffractionHeight(screenDistance, dline, diffractionSpacing)) / screenHeight * 100}%`}
                            x2="0"
                            y2="50%"
                            style={{ stroke: wavelengthToColor(dline)[0] }}
                        />
                    </React.Fragment>
                ))}
            </svg>
        </div>
    )
}

export default Rays