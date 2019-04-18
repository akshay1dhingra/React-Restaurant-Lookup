import React from 'react'

export default class SearchBar extends React.Component {
    render(){
        return(
            <div className="search_bar">
                <form onSubmit={this.props.searchBar}>
                    <label>
                        Zipcode: 
                        <input type="text" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}