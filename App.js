import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Planets from './Planets';
import Films from './Films';
import Spaceships from './Spaceships';
import styles from './styles';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {Platform.OS === 'android' ? (
          <Drawer.Navigator>
            <Drawer.Screen name="Planets" component={Planets} />
            <Drawer.Screen name="Films" component={Films} />
            <Drawer.Screen name="Spaceships" component={Spaceships} />
          </Drawer.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Planets" component={Planets} />
            <Tab.Screen name="Films" component={Films} />
            <Tab.Screen name="Spaceships" component={Spaceships} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
