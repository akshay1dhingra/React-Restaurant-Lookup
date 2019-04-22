import React from 'react'



// export default class Card extends React.Component {

//     render(){
//         return(
//         <div>
//             <div className="restaurant_name">
//                 {/* {this.props.restaurant.name} */}
//                 <form>
//                     {this.props.restaurant.name}{' : '}
//                     {/* Visited? */}
//                     <input
//                         type="checkbox"
//                         value={this.props.restaurant.name}
//                         id="checkbox"
//                         checked={this.props.isVisited}
//                         data-restaurant-id={this.props.restaurant.id}
//                         onChange={this.props.onVisited}
//                     />
//                 </form>
//             </div>
//         </div>
//         )
//     }
// }
//onChange={localStorage.setItem("list", JSON.stringify(this.props.restaurant.name))}

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