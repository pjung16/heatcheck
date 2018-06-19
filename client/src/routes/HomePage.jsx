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
    fetch('/prices')
      .then(res => res.json())
      .then(prices => this.setState({ prices }));
  }

  render() {
    return (
      <div>
        <h1>Heatcheck</h1>
        <Link to='/login'>Login</Link>
        <SearchBar/>
        <h1>Prices</h1>
        {this.state.prices.map(price =>
          <div key={price.id}>{price.price}</div>
        )}
      </div>
    );
  }
}

export default HomePage;