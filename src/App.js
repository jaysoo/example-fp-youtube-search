import React, {
  Component
} from 'react';

import { searchVideos } from './youtube/model';
import Embed from './youtube/Embed';
import styles from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  searchVideos({ target: t }) {
    searchVideos(t.value).fork((e) => this.showError(e), this.updateResults.bind(this));
  }

  showError(s) {
    console.error(s);
  }

  updateResults(videos) {
    this.setState({ videos });
  }

  render() {
    return (
      <div>
        <input
            style={styles.input}
            ref="searchInput"
            placeholder="Search for videos"
            autoFocus={true}
            onChange={this.searchVideos.bind(this)}/>
        <div style={styles.results}>
          {
            this.state.videos.map(v => (
              <div key={v.id} style={styles.video}>
                <Embed video={v}/>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;

