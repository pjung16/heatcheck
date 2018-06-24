import React, {Component} from 'react';

class ShoePage extends Component {
	constructor(props) {
    super(props);

    this.state = {
      prices: [],
      loading: true
    };
  }

  componentDidMount() {
  	console.log("shoepage mounted!")
  	fetch('/prices')
      .then(res => res.json())
      .then(prices => {
        this.setState({
          prices: prices,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
  	let content;

    if (this.state.loading) {
      content = <div>Loading...</div>;
    } else { 
      content = 
        <div>
	        <h1>Shoe</h1>
	        <h1>Prices</h1>
	        {this.state.prices.map(price =>
	          <div key={price.id}>{price.price}</div>
	        )}
      	</div>
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default ShoePage;