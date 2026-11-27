import React, { useRef, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Swipeable({ onSwipe, children }) {
  const [width, setWidth] = useState(200);
  const scroll = useRef(null);
  const swiped = useRef(false);

  function onScroll(e) {
    if (e.nativeEvent.contentOffset.x === 0) {
      swiped.current = false;
    }
    if (e.nativeEvent.contentOffset.x >= width - 1 && !swiped.current) {
      swiped.current = true;
      scroll.current.scrollTo({ x: 0, animated: false });
      onSwipe();
    }
  }

  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 10,
    onScroll,
  };

  return (
    <View
      style={styles.swipeContainer}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      <ScrollView ref={scroll} {...scrollProps}>
        <TouchableOpacity>
          <View style={{ width }}>{children}</View>
        </TouchableOpacity>
        <View style={{ width }} />
      </ScrollView>
    </View>
  );
}
