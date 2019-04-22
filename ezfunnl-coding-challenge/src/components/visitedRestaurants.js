import React from 'react'

export default class VisitedRestaurants extends React.Component {

    

    render(){
        return (
            <div className="local_storage_data">
                {this.props.restaurants.map(r => <div>{r.name}</div>)}
            </div>
        );
    }
}