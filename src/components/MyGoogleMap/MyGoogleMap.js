import React from 'react';
import styles from './MyGoogleMap.module.css';


export default function MyGoogleMap(props) {
  return (
    <div id={styles["google-map-container"]}>
      <iframe
        title="google maps"
        frameBorder="0"
        style={{border:0}}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDs1va7OGZlkeVpqx0m376xqykqiVY2Zks&q=2307+Mound+Ave,+Panama+City,+FL+32405">
      </iframe>
    </div>
  );
}