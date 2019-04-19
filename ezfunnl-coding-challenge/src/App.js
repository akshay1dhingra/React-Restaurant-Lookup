import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar'
import Display from './components/display'
// import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      restaurants: ['hi'],
      visited: false,
      search: ''
    }
  }

  // componentDidMount() {
  //   this.fetchRequest()
  // }

  fetchRequest = () => {
    let url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?type=restaurant&key=AIzaSyA2tDqVwCXGvU5Lx2d2J-vjcId5gPXczW4&query='
    // if (this.state.search !== '') {
      url = url +`${this.state.search}`
    // }
    fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => this.setState({restaurants: data.results}))
  }

  onSearchChange = (event) => {
    // event.persist();
    this.setState({
      [event.target.name]: event.target.value //this is not changing the value of search for some reason
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    this.fetchRequest()
  }

  onVisited = () => {
    this.setState({
      visited: true
    })
  }

  updateRestaurant = (event) => {
    this.setState({
      restaurants: event.target.value
    })
    console.log(this.state.restaurants)
  }

  // componentWillMount(nextProps, nextState) {
  //   localStorage.setItem('restaurant', JSON.stringify(nextState.restaurants))
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="search_area">
                <form onSubmit={this.onSubmitForm}>
                    <label>
                        Zipcode: 
                        <input type="text" name="search" value={this.state.search} onChange={this.onSearchChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
         </div>
         <div className="results_area">
            <Display 
              searchResults={this.state.restaurants}
              onVisited={this.state.visited}
            />
         </div>
         <div></div>
        </header>
      </div>
    );
  }
}

export default App;
