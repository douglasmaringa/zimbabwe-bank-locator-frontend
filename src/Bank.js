import React from 'react';
import "./bank.css"

function Bank({name,time,days,location}) {
    console.log(name)
    return (
        <div>
         
           
            <div className="card">
            <h1>{name}</h1>
            <p>{location}</p>
            <h3>Operating times : {time}</h3>
            <h3>Open on : {days}</h3>
            </div>
            
            </div>
    )
}

export default Bank
