import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class HomePage extends Component {
	constructor(props) {
    super(props);

    this.state = {
      prices: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/StockX')
      .then(res => res.json())
      .then(prices => this.setState({prices}, () => console.log('prices fetched...', prices)));
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to='/login'>Login</Link>
        <SearchBar/>
        <h2>Prices</h2>
        <ul>
        {this.state.prices.map(customer =>
          <li key={customer.id}>{customer.price}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default HomePage;
