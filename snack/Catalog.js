import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function Catalog({ title, introduction, items }) {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading} accessibilityRole="header">{title}</Text>
        <Text style={styles.introduction}>{introduction}</Text>
        {items.map((item) => (
          <View key={item.name} style={styles.card}>
            <Text style={styles.cardTitle} accessibilityRole="header">{item.name}</Text>
            <View style={styles.facts}>
              {item.facts.map((fact) => (
                <Text key={fact} style={styles.fact}>{fact}</Text>
              ))}
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
