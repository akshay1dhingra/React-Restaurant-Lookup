import React from 'react'



export default class Card extends React.Component {


    render(){
        return(
        <div>
            <div className="restaurant_name">
                {/* {this.props.restaurant.name} */}
                <form>
                    {this.props.restaurant.name}{' : '}
                    {/* Visited? */}
                    <input type="checkbox" value={this.props.restaurant.name} id="checkbox" onClick={() => this.props.onVisited(this.props.restaurant.id)}></input>
                </form>
            </div>
        </div>
        )
    }
}
//onChange={localStorage.setItem("list", JSON.stringify(this.props.restaurant.name))}