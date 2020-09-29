import React from 'react'

/**
 * 
 * @param {Object} sources Object with entries for each source.
 * @param {Object} currentSource Object of the currently active source.
 * @param {Function} onChangeSource Callback when source selection changes.
 * @param {Number} currentScreenDistance Number for the current screen distance.
 * @param {Function} onChangeScreenDistance Callback when screen distance changes.
 * @param {Object} gratings Object with entries for each grating configuration.
 * @param {Function} onChangegrating Callback when grating selection changes.
 */
const Toolbar = ({
    sources = {},
    currentSource,
    onChangeSource,
    gratings = {},
    currentGrating = null,
    onChangeGrating,
    currentScreenDistance,
    minScreenDistance,
    maxScreenDistance,
    onChangeScreenDistance,
}) => {
    const height = `2.5rem` // Height of the toolbar
    const padding = `2px`   // Padding inside toolbar border

    const itemStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.25rem',
    }
    const labelStyle = {
        fontWeight: 'bold',
    }
    const selectStyle = {
        background: 'black',
        color: 'white',
    }

    return (
        <div style={{
            height: height,
            padding: padding,
            color: 'white',
        }}>
            <form onSubmit={e => e.preventDefault()} style={{
                display: 'flex',
                flexFlow: 'row wrap',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            }}>
                <div style={itemStyle}>
                    <label htmlFor='source' style={labelStyle}>
                        <span>Source</span>
                    </label>
                    <select
                        style={selectStyle}
                        id='source'
                        defaultValue={currentSource}
                        onChange={e => onChangeSource(sources[e.target.value])}
                    >
                        {Object.keys(sources).map(source => (
                            <option value={source} key={source}>
                                {sources[source].name}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={itemStyle}>
                    <label htmlFor='grating' style={labelStyle}>
                        <span>Grating</span>
                    </label>
                    <select
                        style={selectStyle}
                        id='grating'
                        defaultValue={currentGrating}
                        onChange={e => onChangeGrating(gratings[e.target.value])}
                    >
                        {Object.keys(gratings).map(grating => (
                            <option value={grating} key={grating}>
                                {gratings[grating].name}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={itemStyle}>
                    <label htmlFor='distance' style={labelStyle}>
                        <span>Screen Distance ({currentScreenDistance} mm)</span>
                    </label>
                    <input
                        type='range'
                        id='distance'
                        min={minScreenDistance}
                        max={maxScreenDistance}
                        step='1'
                        defaultValue={currentScreenDistance}
                        onChange={e => onChangeScreenDistance(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Toolbar