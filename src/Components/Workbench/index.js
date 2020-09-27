import React, { useState } from 'react'
import './workbench.scss'
import { wavelengthToColor } from 'Utilities/spectralUtilities'
import elements from 'Data/elements'

function height(d, lambda, a) {
    return d * lambda / Math.sqrt(
        a*a - lambda*lambda
    )
}

const Source = props => (
    <div
        className='source'
        style={{
            background: `${props.color}`,
            borderColor: `${props.border}`,
            boxShadow: `${props.glow} 0 0 8px 8px`
        }}
    />
)
const Grate = () => (
    <div className='grate' />
)
const Rays = props => {
    return (
        <div className='rays'>
            <svg className='source-rays'>
                <line x1="0" y1="50%" x2="100%" y2="50%" />
            </svg>
            <svg className='diffracted-rays'>
                <line x1="0" y1="50%" x2="100%" y2="50%" style={{ stroke: 'white' }} />
                {props.lines.map(dline => (
                    <React.Fragment key={dline}>
                        <line
                            x1="0" y1="50%" x2="100%"
                            y2={`${(300 - height(608, dline, 1660)) / 600 * 100}%`}
                            style={{ stroke: wavelengthToColor(dline)[0] }}
                        />
                        <line
                            x1="0" y1="50%" x2="100%"
                            y2={`${100 - (300 - height(608, dline, 1660)) / 600 * 100}%`}
                            style={{ stroke: wavelengthToColor(dline)[0] }}
                            />
                    </React.Fragment>
                ))}
            </svg>
        </div>
    )
}
const Screen = props => {
    const lines = props.lines.map(line => ({
        wavelength: line,
        height: height(608, line, 1660),
        color: wavelengthToColor(line)[0],
    }))
    console.log(lines)
    return (
        <div className='screen'>
            <div
                className='spectralLine'
                style={{
                    background: props.sourceColor
                }}
            />
            {lines.map((line,i) => (
                <React.Fragment key={i}>
                    <div
                        className='spectralLine'
                        style={{
                            transform: `translateY(-${line.height}px)`,
                            background: line.color,
                        }}
                    />
                    <div
                        className='spectralLine'
                        style={{
                            transform: `translateY(${line.height}px)`,
                            background: line.color,
                        }}
                    />
                </React.Fragment>
            ))}
        </div>
    )
}

const Workbench = () => {
    const [active, setActive] = useState(elements.hydrogen)
    return (
        <div className='container'>
            <div className='toolbar'>
                <select defaultValue={active} onChange={e => setActive(elements[e.target.value])}>
                    {Object.keys(elements).map(element => (
                        <option value={element} key={element}>
                            {element.charAt(0).toUpperCase() + element.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <div className='workbench'>
                <Rays lines={active.lines} />
                <Source
                    color={active.sourceColor}
                    border={active.sourceBorder}
                    glow={active.sourceGlow}
                />
                <Grate />
                <Screen sourceColor={active.sourceColor} lines={active.lines} />
            </div>
        </div>
    )
}

export default Workbench