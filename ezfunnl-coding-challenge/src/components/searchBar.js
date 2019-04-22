import React from 'react'

export default class SearchBar extends React.Component {
    render(){
        return(
            <div className="search_bar">
                <form onSubmit={this.props.onSubmitForm}>
                    <label>
                        Zipcode: 
                        <input type="text" name="search" value={this.props.search} onChange={this.props.onSearchChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}