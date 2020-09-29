import React, { useState } from 'react'
import Toolbar from 'Components/Toolbar'
import elements from 'Data/elements.json'
import gratings from 'Data/gratings.json'

const SpectralLab = () => {
    const [source, setSource] = useState(elements.hydrogen)
    const [grating, setGrating] = useState(gratings[0])
    const [screenDistance, setScreenDistance] = useState(400)   // Represents millimeters
    const screenRange = [300, 450]      // Min and max values for screen distance

    return (
        <div>
            <Toolbar
                sources={elements}
                currentSource={source}
                onChangeSource={newSource => setSource(newSource)}
                gratings={gratings}
                currentGrating={grating}
                onChangeGrating={newGrating => setGrating(newGrating)}
                currentScreenDistance={screenDistance}
                minScreenDistance={screenRange[0]}
                maxScreenDistance={screenRange[1]}
                onChangeScreenDistance={newDistance => setScreenDistance(newDistance)}
            />
        </div>
    )
}

export default SpectralLab