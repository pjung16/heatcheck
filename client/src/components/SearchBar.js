import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: '',
      size: 0,
      sizes: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5]
    };

    this.handleShoeChange = this.handleShoeChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShoeChange(event) {
    this.setState({shoe: event.target.value});
  }

  handleSizeChange(event) {
    this.setState({size: event.target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3001/api/shoes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shoe: this.state.shoe,
        size: this.state.size
      })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      //Success code goes here
      alert('form submited')
    }).catch(function(err) {
      //Failure
      alert(console.log(err))
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Shoe:
            <input
              type={'text'}
              value={this.state.shoe}
              onChange={this.handleShoeChange}
              placeholder={'Search for your ideal shoe...'}
            />
          </label>
          <label>
            Size:
            <select value={this.state.size} onChange={this.handleSizeChange}>
              {this.state.sizes.map(size =>
                <option key={size} value={size}>{size}</option>
              )}
            </select>
          </label>
          <input 
            type="submit" 
            value="Search" 
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;