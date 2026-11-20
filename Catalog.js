import React from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from './Search';
import styles from './styles';

export default function Catalog({ title, introduction, items, loading, error, onRetry }) {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Search />
      <FlatList
        contentContainerStyle={styles.content}
        data={items}
        keyExtractor={(item) => item.uid}
        ListHeaderComponent={
          <View>
            <Text style={styles.heading} accessibilityRole="header">{title}</Text>
            <Text style={styles.introduction}>{introduction}</Text>
          </View>
        }
        ListEmptyComponent={
          loading ? <ActivityIndicator accessibilityLabel={`Loading ${title.toLowerCase()}`} /> :
          error ? (
            <View>
              <Text style={styles.description} accessibilityRole="alert">{error}</Text>
              <Button title="Try again" onPress={onRetry} />
            </View>
          ) : <Text style={styles.description}>No items found.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle} accessibilityRole="header">{item.name}</Text>
            {item.facts && <View style={styles.facts}>
              {item.facts.map((fact) => (
                <Text key={fact} style={styles.fact}>{fact}</Text>
              ))}
            </View>}
            {item.description && <Text style={styles.description}>{item.description}</Text>}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
