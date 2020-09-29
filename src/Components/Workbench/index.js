import React from 'react'
import './workbench.scss'
import Screen from './Screen'
import Source from './Source'
import Grate from './Grate'
import Rays from './Rays'


const Workbench = ({
    source,
    grating,
    screenDistance,
    minScreenDistance,
    maxScreenDistance,
}) => {
    const screenHeight = 600    // In pixels

    const grateX = 60 - 20 * (screenDistance - minScreenDistance) / (maxScreenDistance - minScreenDistance)

    return (
        <div className='workbench' style={{ minHeight: screenHeight }}>
            <div className='scaling'>
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
                    coordinates={{ x: 82, y: 50 }}
                    height={`${screenHeight}px`}
                    sourceColor={source.sourceColor}
                    screenDistance={screenDistance}
                    gratingSpacing={grating.period}
                    lines={source.lines}
                />
                <Rays
                    sourceCoordinates={{ x: 10, y: 50 }}
                    screenCoordinates={{ x: 82, y: 50 }}
                    screenHeight={screenHeight}
                    screenDistance={screenDistance}
                    diffractionSpacing={grating.period}
                    coordinates={{ x: 50, y: 50 }}
                    gratePosition={grateX}
                    lines={source.lines}
                />
            </div>
        </div>
    )
}

export default Workbench