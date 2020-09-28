import React from 'react'
import Positioned from 'Components/Positioned'
import { wavelengthToColor, diffractionHeight } from 'Utilities/spectralUtilities'


const Screen = props => {
    const { screenDistance, gratingSpacing, coordinates, height } = props
    const lines = props.lines.map(line => ({
        wavelength: line,
        height: diffractionHeight(screenDistance, line, gratingSpacing),
        color: wavelengthToColor(line)[0],
    }))

    const style = {
        position: 'absolute',
        height: `${height}`,
        width: '120px',
        transform: 'translateY(-50%)',
        border: 'none',
        borderLeft: '1px solid white',
        borderRight: '1px solid white',
        boxSizing: 'border-box',
        background: 'black',
    }

    const SpectralLine = ({ color, height }) => {
        return (
            <div style={{
                position: 'absolute',
                top: '50%',
                width: '200px',
                transform: `translateY(${-(height + 1)}px)`,
                height: '2px',
                display: "flex",
                flexDirection: 'row',
                alignItems: 'center',
                gap: '4px',
            }}>
                <div style={{
                    width: '112px',
                    height: '2px',
                    margin: '0 4px',
                    background: color,
                }} />
                <div style={{
                    color: "white",
                    fontSize: '0.825rem'
                }}>{Math.round(height)}mm</div>
            </div>
        )
    }

    return (
        <Positioned coordinates={coordinates}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={style}>
                    <SpectralLine color='white' height={0}/>
                    {lines.map((line, i) => (
                        <React.Fragment key={i}>
                            <SpectralLine color={line.color} height={line.height} />                        
                            <SpectralLine color={line.color} height={-line.height} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </Positioned>
    )
}

export default Screen