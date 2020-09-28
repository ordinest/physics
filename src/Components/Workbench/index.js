import React, { useState } from 'react'
import './workbench.scss'
import elements from 'Data/elements'
import Screen from './Screen'
import Source from './Source'
import Grate from './Grate'
import Rays from './Rays'


const Workbench = () => {
    const [active, setActive] = useState(elements.hydrogen)
    const [spacing, setSpacing] = useState(1660)
    const [screenDistance, setScreenDistance] = useState(400)

    const toolbarPadding = 2    // 2px
    const toolbarHeight = 2.5   // 2.5rem
    const screenHeight = 600    // In pixels
    const grateMin = 200        // In millimeters
    const grateMax = 450        // In millimeters
    const spacingMin = 1220     // In nanometers
    const spacingMax = 1820     // In nanometers

    const grateX = 60 - 20 * (screenDistance - grateMin) / (grateMax-grateMin)

    return (
        <div className='container'>
            <div className='toolbar' style={{
                height: `${toolbarHeight}rem`,
                padding: `${toolbarPadding}px`,
                overflow: 'auto',
            }}>
                <div className='item'>
                    <label htmlFor='source'><span>Source</span></label>
                    <select id='source' defaultValue={active} onChange={e => setActive(elements[e.target.value])}>
                        {Object.keys(elements).map(element => (
                            <option value={element} key={element}>
                                {elements[element].name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='item'>
                    <label htmlFor='distance'>
                        <span>
                            {`Screen Distance (${screenDistance} mm)`}
                        </span>
                    </label>
                    <input
                        type='range'
                        id='distance'
                        min={grateMin}
                        max={grateMax}
                        step="1"
                        defaultValue={screenDistance}
                        onChange={e => setScreenDistance(e.target.value)}
                    />
                </div>
                <div className='item'>
                    <label htmlFor='spacing'><span>{`Grating Period (${spacing} nm)`}</span></label>
                    <input
                        type='range'
                        id='spacing'
                        min={spacingMin}
                        max={spacingMax}
                        step="1"
                        defaultValue={spacing}
                        onChange={e => setSpacing(e.target.value)}
                    />
                </div>
            </div>
            <div className='workbench' style={{ minHeight: screenHeight }}>
                <div className='scaling'>
                    <Source
                        coordinates={{ x: 10, y: 50 }}
                        color={active.sourceColor}
                        border={active.sourceBorder}
                        glow={active.sourceGlow}
                    />
                    <Grate
                        coordinates={{ x: grateX, y: 50 }}
                    />
                    <Screen
                        coordinates={{ x: 82, y: 50 }}
                        height={`${screenHeight}px`}
                        sourceColor={active.sourceColor}
                        screenDistance={screenDistance}
                        gratingSpacing={spacing}
                        lines={active.lines}
                    />
                    <Rays
                        sourceCoordinates={{ x: 10, y: 50 }}
                        screenCoordinates={{ x: 82, y: 50 }}
                        screenHeight={screenHeight}
                        screenDistance={screenDistance}
                        diffractionSpacing={spacing}
                        coordinates={{ x: 50, y: 50 }}
                        gratePosition={grateX}
                        lines={active.lines}
                    />
                </div>
            </div>
        </div>
    )
}

export default Workbench