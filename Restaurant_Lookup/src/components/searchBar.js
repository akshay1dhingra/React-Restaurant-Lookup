import React from 'react'

export default function SearchBar(props){
    return( 
        <div className="search_bar">
            <form onSubmit={props.onSubmitForm}>
                <label>
                    Zipcode: 
                    <input type="text" name="search" onChange={props.onSearchChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}