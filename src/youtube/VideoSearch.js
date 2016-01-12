import React from 'react';

import Embed from './Embed';
import styles from '../styles';

const VideoSearch = ({ onSearch, results }) => (
  <div style={styles.container}>
    <div style={styles.inputContainer}>
      <input
        style={styles.input}
        placeholder="Search for videos"
        autoFocus={true}
        onChange={ ({ target: t }) => onSearch(t.value) }/>
    </div>
    {
      results.cata({
        Right: (videos) => {
          if (videos.length === 0) {
            return <div style={styles.fill}>No videos found</div>;
          } else {
            return (
              <div style={styles.results}>
                {
                  videos.map(v => (
                    <div key={v.id} style={styles.video}>
                      <Embed video={v}/>
                    </div>
                  ))
                }
              </div>
            );
          }
        },
        Left: (msg) => <div style={styles.fill}>{msg}</div>
      })
    }
  </div>
);

export default VideoSearch;
