import React from 'react'
import Card from './card'

export default class Dispaly extends React.Component {
    render(){
        let cardComponent = this.props.searchResults.map(r => (
            <Card 
                restaurant={r}
                key={r.id}
                onVisited={this.props.onVisited}
            />
          ))


        return(
            <div className="display_results">
                {cardComponent}
            </div>
        )
    }
}