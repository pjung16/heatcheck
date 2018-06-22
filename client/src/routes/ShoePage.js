import React, {Component} from 'react';

class ShoePage extends Component {
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
        <h1>Shoe</h1>
        <h1>Prices</h1>
        {this.state.prices.map(price =>
          <div key={price.id}>{price.price}</div>
        )}
      </div>
    );
  }
}

export default ShoePage;