import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar'
import Display from './components/display'
import VisitedRestaurants from './components/visitedRestaurants'


class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: [],
      visited: this.getRestaurants(),
      localStorageData: [],
      search: ''
    }
  }

  fetchRequest = () => {
    let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?type=restaurant&key=${process.env.REACT_APP_PLACES_API_KEY}&query=`
      url = url +`${this.state.search}`
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({restaurants: data.results}))
  }

  onSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    this.fetchRequest()
  }

  onVisited = (e) => {
    const id = e.target.dataset.restaurantId;
    const isAdding = e.target.checked;

    let updatedRestaurants;
    if (isAdding) {
      const newRestaurant = this.state.restaurants.find(r => r.id === id)
      updatedRestaurants = [...this.state.visited, newRestaurant]
    } else {
      updatedRestaurants = this.state.visited.filter((r) => r.id !== id);
    }

    this.setState({visited: updatedRestaurants})
    localStorage.setItem('restaurant', JSON.stringify(updatedRestaurants))
  }

  clearDisplay = () => {
    this.setState({restaurants: []})
  }

  getRestaurants() {
    const restaurants = localStorage.getItem('restaurant');
    if (!restaurants) {
        return [];
    }
    return JSON.parse(restaurants);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="search_area">
          <SearchBar 
            onSubmitForm={this.onSubmitForm}
            onSearchChange={this.onSearchChange}
            search={this.state.search}
          />  
         </div>
         <div>
           <button onClick={this.clearDisplay}>Clear Results</button>
         </div>
         <div className="results_area">
            <Display 
              searchResults={this.state.restaurants}
              onVisited={this.onVisited}
              isVisitedFunc={(restaurantId) => this.getRestaurants().some(r => r.id === restaurantId)}
            />
         </div>
         <div>
            Your saved Restaurants:
         </div>
         <div className="local_storage">
           <VisitedRestaurants 
            restaurants={this.getRestaurants()}
           />
         </div>
        </header>
      </div>
    );
  }
}

export default App;
