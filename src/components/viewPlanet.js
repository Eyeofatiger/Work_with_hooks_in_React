import React, {useState, useEffect} from 'react';

const ViewPlanet = ({id})=> {
    const style = {
        margin: '20px auto',
        backgroundColor: 'lightblue',
        fontWeight: 'bold'
    };

    const [data, setData] = useState({});
        
    useEffect(()=>{
        let cancelled = false;

        fetch('https://swapi.co/api/planets/'+id)
        .then(res=>res.json())
        .then(data=> !cancelled && setData(data));

        return ()=> cancelled = true;
    }, [id]);

    return(
        <div style={style}>{id} - Planet {data.name}</div>
    );
};

export default ViewPlanet;