import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class HomePage extends Component {
	constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/StockX')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to='/login'>Login</Link>
        <SearchBar/>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default HomePage;