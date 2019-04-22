import React from 'react'
import Card from './card'

export default function Display(props){
    let cardComponent = props.searchResults.map(r => (
        <Card 
            restaurant={r}
            key={r.id}
            onVisited={props.onVisited}
            isVisited={props.isVisitedFunc(r.id)}
        />
      ))
      
    return(
        <div className="display_results">
            {cardComponent}
        </div>
    )
}