import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class HomePage extends Component {
	constructor() {
    super();
    this.state = {
      prices: []
    };
  }

  componentDidMount() {
    fetch('/api/StockX')
      .then(res => res.json())
      .then(prices => this.setState({prices}, () => console.log('prices fetched...', prices)));
  }

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to='/login'>Login</Link>
        <SearchBar/>
        <h2>Prices</h2>
        <ul>
        {this.state.prices.map(customer => 
          <li key={prices.id}>{prices.price}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default HomePage;