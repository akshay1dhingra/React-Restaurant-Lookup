import React from 'react'

export default function Card(props){
    return(
        <div>
            <div className="restaurant_name">
                <form>
                    {props.restaurant.name}{' : '}
                    <input
                        type="checkbox"
                        value={props.restaurant.name}
                        id="checkbox"
                        checked={props.isVisited}
                        data-restaurant-id={props.restaurant.id}
                        onChange={props.onVisited}
                    />
                </form>
            </div>
        </div>
        )
}