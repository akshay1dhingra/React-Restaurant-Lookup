import React from 'react'

export default function VisitedRestaurants(props){
    return (
        <div className="local_storage_data">
            {props.restaurants.map(r => <div key={r.id}>{r.name}</div>)}
        </div>
    );
}