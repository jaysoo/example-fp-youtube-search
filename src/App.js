import React, {
  Component
} from 'react';

class App extends Component {
  searchClicked() {
    const { value } = this.refs.searchInput;
  }

  render() {
    return (
      <div>
        <input ref="searchInput" placeholder="Search for videos"/>
        <button onClick={() => this.searchClicked()}>
          Search
        </button>
      </div>
    );
  }
}

export default App;

