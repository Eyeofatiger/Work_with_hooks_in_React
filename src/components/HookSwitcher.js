import React, { useState } from 'react';

const HookSwitcher = ()=> {

    const [color, setColor] = useState('white');

    const divStyle = {
        padding: '10px',
        backgroundColor: color
    };
    return(
        <div style={divStyle}>
            <button type="button"
                    onClick={()=>{setColor('darkgrey')}}>Dark</button>
            <button type="button"
                    onClick={()=>{setColor('white')}}>Light</button>
        </div>
    );
};

export default HookSwitcher;