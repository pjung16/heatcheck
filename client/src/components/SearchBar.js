import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Search for your ideal shoe...'}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;