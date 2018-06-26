import React, {Component} from 'react';
import "./ShoePage.css";

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
        console.log("hello");
      });
  }

  render() {
  	let content;

    if (this.state.loading) {
      content = 
      <div className="screen">
			  <div className="loader">
			    <div className="dot"></div>
			    <div className="dot"></div>
			    <div className="dot"></div>
			  </div>
			</div>
    } else { 
      content = 
        <div>
	        <h1>Shoe</h1>
	        <h1>Prices</h1>
	        {this.state.prices.map(price =>
	          <div key={price.id}>{price.store}: {price.price}</div>
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