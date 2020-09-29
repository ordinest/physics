import React from 'react'
import { createUseStyles } from 'react-jss'

// Create styles for toolbar components
const useStyles = createUseStyles({
    toolbarStyle: {
        height: `2.5rem`,
        padding: `2px`,
        color: 'white',
    },
    itemStyle: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.25rem',
    },
    labelStyle: {
        fontWeight: 'bold',
    },
    selectStyle: {
        background: 'black',
        color: 'white',
    }
})

/**
 * Toolbar component for the Spectral Identification lab.
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
    const classes = useStyles()

    return (
        <div className={classes.toolbarStyle}>
            <form onSubmit={e => e.preventDefault()} style={{
                display: 'flex',
                flexFlow: 'row wrap',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            }}>
                <div className={classes.itemStyle}>
                    <label htmlFor='source' className={classes.labelStyle}>
                        <span>Source</span>
                    </label>
                    <select
                        className={classes.selectStyle}
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
                <div className={classes.itemStyle}>
                    <label htmlFor='grating' className={classes.labelStyle}>
                        <span>Grating</span>
                    </label>
                    <select
                        className={classes.selectStyle}
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
                <div className={classes.itemStyle}>
                    <label htmlFor='distance' className={classes.labelStyle}>
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