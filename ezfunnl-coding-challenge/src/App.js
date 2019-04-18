import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar'
import Display from './components/display'
// import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      restaurants: [],
      visited: false,
      search: '60622'
    }
  }

  componentDidMount() {
    let search = this.state.search
    fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?type=restaurant&key=AIzaSyA2tDqVwCXGvU5Lx2d2J-vjcId5gPXczW4&query='+search)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => this.setState({restaurants: data.results}))
  }

  onSearchChange = (event) => {
    this.setState({
      search: event.input.value
    })
  }

  onVisited = () => {
    this.setState({
      visited: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="search_area">
            <SearchBar 
              searchBar={this.onSearchChange}
            />
         </div>
         <div className="results_area">
            <Display 
              searchResults={this.state.restaurants}
              onVisited={this.state.visited}
            />
         </div>
        </header>
      </div>
    );
  }
}

export default App;
