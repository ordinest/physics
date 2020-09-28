import React from 'react'

const Toolbar = ({
    onChangeSource,
    sources,
}) => (
    <div className='toolbar'>
        <label for='source'><span>Source:&nbsp;</span></label>
        <select id='source' defaultValue={active} onChange={onChangeSource}>
            {Object.keys(elements).map(element => (
                <option value={element} key={element}>
                    {element.charAt(0).toUpperCase() + element.slice(1)}
                </option>
            ))}
        </select>
    </div>
    )

    export default Toolbar