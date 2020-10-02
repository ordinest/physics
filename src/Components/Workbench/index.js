import React from 'react'
import './workbench.scss'
import Screen from './Screen'
import Source from './Source'
import Grate from './Grate'
import Rays from './Rays'


const Workbench = ({
    source,
    height,
    grating,
    screenDistance,
    minScreenDistance,
    maxScreenDistance,
}) => {
    const screenHeight = height    // In pixels

    const grateX = 60 - 20 * (screenDistance - minScreenDistance) / (maxScreenDistance - minScreenDistance)
    const style = {
        position: 'absolute',
        height: `${height}px`,
        width: '100%',
    }

    return (
        <div className='workbench' style={style}>
            <Source
                coordinates={{ x: 10, y: 50 }}
                color={source.sourceColor}
                border={source.sourceBorder}
                glow={source.sourceGlow}
            />
            <Grate
                coordinates={{ x: grateX, y: 50 }}
            />
            <Screen
                coordinates={{ x: 85, y: 50 }}
                height={`${screenHeight}px`}
                width={15}
                sourceColor={source.sourceColor}
                screenDistance={screenDistance}
                gratingSpacing={grating.period}
                lines={source.lines}
            />
            <Rays
                sourceCoordinates={{ x: 10, y: 50 }}
                screenCoordinates={{ x: 85, y: 50 }}
                screenHeight={screenHeight}
                screenDistance={screenDistance}
                diffractionSpacing={grating.period}
                coordinates={{ x: 50, y: 50 }}
                gratePosition={grateX}
                lines={source.lines}
            />
        </div>
    )
}

export default Workbench