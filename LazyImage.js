import React, { useState } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const placeholder = require('./assets/placeholder.png');

function Placeholder({ loaded }) {
  if (loaded) {
    return null;
  } else {
    return <Image style={styles.imageContent} source={placeholder} accessible={false} />;
  }
}

export default function LazyImage({ style, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={style}>
      <Placeholder loaded={loaded} />
      <Image
        {...props}
        style={[styles.imageContent, { opacity: loaded ? 1 : 0 }]}
        onLoadStart={() => setLoaded(false)}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
    </View>
  );
}
