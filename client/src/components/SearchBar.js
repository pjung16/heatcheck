import React, {Component} from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type={'text'}
          onChange={this.handleChange}
          placeholder={'Search for your ideal shoe...'}
        />
      </div>
    );
  }
}

export default SearchBar;