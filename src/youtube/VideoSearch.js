import React from 'react';

import Embed from './Embed';
import styles from './../styles';

const VideoSearch = ({ onSearch, results }) => (
  <div>
    <input
      style={styles.input}
      placeholder="Search for videos"
      autoFocus={true}
      onChange={ ({ target: t }) => onSearch(t.value) }/>
    <div style={styles.results}>
      {
        results.map(v => (
          <div key={v.id} style={styles.video}>
            <Embed video={v}/>
          </div>
        ))
      }
    </div>
  </div>
);

export default VideoSearch;
