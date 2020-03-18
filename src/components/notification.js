import React, {useState, useEffect} from 'react';

const Notification = ()=> {
    const style={
        backgroundColor: 'wheat',
        border: '1px solid grey',
        margin: '10px auto',
        width: '50%',
        textAlign: 'center'
    };
    const [showNotification, setShowNotification] = useState(true);

    useEffect(()=>{setTimeout(()=>{setShowNotification(false)}, 5000)}, []);

    if(!showNotification){
        return null;
    }

    return(
        <div style={style}>
            <h3>Atention!!!</h3>
            <p>This text will show just for a few seconds...</p>
        </div>
    );
};

export default Notification;