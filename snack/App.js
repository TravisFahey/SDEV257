import { StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function Box({ number, size }) {
  return (
    <View style={[styles.box, { width: size }]}>
      <Text style={styles.boxText}>#{number}</Text>
    </View>
  );
}

function Column({ children }) {
  return <View style={styles.column}>{children}</View>;
}

function Row({ children }) {
  return <View style={styles.row}>{children}</View>;
}

function Layout() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  // Fit six square boxes and their spacing inside the available safe area.
  const size = Math.max(1, Math.min(
    (width - insets.left - insets.right) * 0.267,
    (height - insets.top - insets.bottom - 48) / 6,
  ));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" />
      {[1, 5, 9].map((first) => (
        <Row key={first}>
          <Column>
            <Box number={first} size={size} />
            <Box number={first + 1} size={size} />
          </Column>
          <Column>
            <Box number={first + 2} size={size} />
            <Box number={first + 3} size={size} />
          </Column>
        </Row>
      ))}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Layout />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'ghostwhite',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    aspectRatio: 1,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: 'darkslategray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
