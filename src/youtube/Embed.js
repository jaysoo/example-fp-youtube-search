import React from 'react';
import styles from '../styles';

const Embed = ({ video }) => (
  <a href={video.url} style={styles.thumbnail} title={video.title}>
    <img src={video.thumbnail} style={styles.thumbnail}/>
  </a>
);

export default Embed;
