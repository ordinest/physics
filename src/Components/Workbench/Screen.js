import React from 'react'
import { wavelengthToColor, diffractionHeight } from 'Utilities/spectralUtilities'


const Screen = props => {
    const { screenDistance, gratingSpacing, coordinates, height, width } = props
    const lines = props.lines.map(line => ({
        wavelength: line,
        height: diffractionHeight(screenDistance, line, gratingSpacing),
        color: wavelengthToColor(line)[0],
    }))

    const style = {
        position: 'absolute',
        height: `${height}`,
        width: '100%',
        border: 'none',
        background: 'black',
    }
    const borders = {
        position: 'absolute',
        height: '100%',
        width: '54%',
        left: 0,
        top: 0,
        borderLeft: '1px solid white',
        borderRight: '1px solid white',
        boxSizing: 'border-box',
    }

    const SpectralLine = ({ color, height }) => {
        return (
            <div style={{
                position: 'absolute',
                top: '50%',
                width: '100%',
                transform: `translateY(${-(height + 1)}px)`,
                height: '2px',
                display: "flex",
                flexDirection: 'row',
                alignItems: 'center',
                gap: '4px',
            }}>
                <div style={{
                    width: '50%',
                    height: '2px',
                    margin: '0 2%',
                    background: color,
                }}
                />
                <div style={{
                    color: "white",
                    fontSize: '0.825rem',
                }}>{Math.round(height * 10) / 10}mm</div>
            </div>
        )
    }

    return (
        <div style={{
            position: 'absolute',   
            display: 'flex',
            flexDirection: 'row',
            width: `${width}%`,
            height: `100%`,
            left: `${coordinates.x}%`,
            top: `${coordinates.y}%`,
            transform: 'translateY(-50%)'
        }}>
            <div style={style}>
                <div style={borders}/>
                <SpectralLine color='white' height={0}/>
                {lines.map((line, i) => (
                    <React.Fragment key={i}>
                        <SpectralLine
                            color={line.color}
                            height={line.height}
                        />                        
                        <SpectralLine
                            color={line.color}
                            height={-line.height}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Screen