import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar'
import Display from './components/display'
import VisitedRestaurants from './components/visitedRestaurants'
// import axios from 'axios';

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

    // if (isAdding) {
    //   let newVisitedObject = this.state.restaurants.find(r => {
    //     return r.id === id 
    //   })
    //   this.setState(state => {
    //     const visited = [...state.visited, newVisitedObject] 
    //     localStorage.setItem('restaurant', JSON.stringify(visited))
    //     return {
    //       visited
    //     }
    //   });
    // } else {
    //   const newVisitedRestaurants = [...this.state.visited].filter((r) => r.id !== id);
    //   localStorage.setItem('restaurant', JSON.stringify(newVisitedRestaurants));
    //   this.setState({
    //     visited: newVisitedRestaurants
    //   })
    // }
    

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

  // componentWillMount() {
  //   localStorage.getItem('restaurant') && this.setState({
  //     localStorageData: JSON.parse(localStorage.getItem('restaurant'))
  //   })
  // }

  // getLocalStorage = () => {
  //   console.log(this.state.getLocalStorage)
  // }

  // getLocalStorage = () => {
  //   let restaurants = JSON.parse(localStorage.getItem('restaurant' || '[]'));
  //   console.log("# of restaurants: " + restaurants.length);
  //   this.setState({
  //     localStorageData: restaurants
  //   }, () => {
  //     console.log(this.state.localStorageData + ' hi')
  //   })
  //   // restaurants.forEach(function(restaurant, index) {
  //   //     console.log("[" + index + "]: " + restaurant.id);
  //   // });
  // }


// state.visited.concat(newVisitedObject); <--- this also works

  // updateRestaurant = (event) => {
  //   this.setState({
  //     restaurants: event.target.value
  //   })
  //   console.log(this.state.restaurants)
  // }

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
