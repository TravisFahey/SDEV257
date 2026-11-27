import React, { useState } from 'react';
import { ActivityIndicator, Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from './Search';
import ConfirmationModal from './ConfirmationModal';
import Swipeable from './Swipeable';
import styles from './styles';

export default function Catalog({ title, introduction, items, loading, error, onRetry }) {
  const [selectedItem, setSelectedItem] = useState(null);

  function onSwipe(item) {
    return () => {
      setSelectedItem(item);
    };
  }

  function closeModal() {
    setSelectedItem(null);
  }

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Search />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.heading} accessibilityRole="header">{title}</Text>
        <Text style={styles.introduction}>{introduction}</Text>
        {items.length === 0 && (
          loading ? <ActivityIndicator accessibilityLabel={`Loading ${title.toLowerCase()}`} /> :
          error ? (
            <View>
              <Text style={styles.description} accessibilityRole="alert">{error}</Text>
              <Button title="Try again" onPress={onRetry} />
            </View>
          ) : <Text style={styles.description}>No items found.</Text>
        )}
        {items.map((item) => (
          <Swipeable key={item.uid} onSwipe={onSwipe(item)}>
            <View style={styles.card}>
              <Text style={styles.cardTitle} accessibilityRole="header">{item.name}</Text>
              {item.facts && <View style={styles.facts}>
                {item.facts.map((fact) => (
                  <Text key={fact} style={styles.fact}>{fact}</Text>
                ))}
              </View>}
              {item.description && <Text style={styles.description}>{item.description}</Text>}
            </View>
          </Swipeable>
        ))}
      </ScrollView>
      <ConfirmationModal
        visible={selectedItem !== null}
        title=""
        message={selectedItem ? [selectedItem.name, ...(selectedItem.facts || []), selectedItem.description].filter(Boolean).join('\n\n') : ''}
        onPressConfirm={closeModal}
        onRequestClose={closeModal}
      />
    </SafeAreaView>
  );
}
