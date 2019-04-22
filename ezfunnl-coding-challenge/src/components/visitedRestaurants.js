import React from 'react'

// export default class VisitedRestaurants extends React.Component {

    

//     render(){
//         return (
//             <div className="local_storage_data">
//                 {this.props.restaurants.map(r => <div key={r.id}>{r.name}</div>)}
//             </div>
//         );
//     }
// }

export default function VisitedRestaurants(props){
    return (
        <div className="local_storage_data">
            {props.restaurants.map(r => <div key={r.id}>{r.name}</div>)}
        </div>
    );
}