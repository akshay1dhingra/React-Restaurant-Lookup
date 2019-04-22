import React from 'react'
import Card from './card'

export default class Display extends React.Component {
    render(){
        let cardComponent = this.props.searchResults.map(r => (
            <Card 
                restaurant={r}
                key={r.id}
                onVisited={this.props.onVisited}
                isVisited={this.props.isVisitedFunc(r.id)}
            />
          ))


        return(
            <div className="display_results">
                {cardComponent}
            </div>
        )
    }
}