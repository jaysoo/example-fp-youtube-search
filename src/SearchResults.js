import React from 'react';

import Embed from './youtube/Embed';
import styles from './styles';

const SearchResults = ({ videos }) => (
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

export default SearchResults;
