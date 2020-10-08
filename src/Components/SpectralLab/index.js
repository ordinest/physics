import React, { useState } from 'react'
import Toolbar from 'Components/Toolbar'
import Workbench from 'Components/Workbench'
import sources from 'Data/sources.json'
import gratings from 'Data/gratings.json'

const SpectralLab = () => {
    const [source, setSource] = useState(sources.hydrogen)
    const [grating, setGrating] = useState(gratings[0])
    const [screenDistance, setScreenDistance] = useState(400)   // Represents millimeters
    const screenRange = [200, 800]      // Min and max values for screen distance
    const toolbarHeight = '40'         // In pixels

    return (
        <div>
            <Toolbar
                sources={sources}
                height={`${toolbarHeight}px`}
                onChangeSource={newSource => setSource(newSource)}
                gratings={gratings}
                currentGrating={grating}
                onChangeGrating={newGrating => setGrating(newGrating)}
                currentScreenDistance={screenDistance}
                minScreenDistance={screenRange[0]}
                maxScreenDistance={screenRange[1]}
                onChangeScreenDistance={newDistance => setScreenDistance(newDistance)}
            />
            <Workbench
                source={source}
                height={`${window.innerHeight - toolbarHeight - 16}`}
                grating={grating}
                screenDistance={screenDistance}
                minScreenDistance={screenRange[0]}
                maxScreenDistance={screenRange[1]}
            />
        </div>
    )
}

export default SpectralLab