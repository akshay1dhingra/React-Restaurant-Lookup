import React from 'react'


export default class Card extends React.Component {
    render(){
        return(
            <div className="restaurant_name">
                {this.props.restaurant.name}
            </div>
        )
    }
}