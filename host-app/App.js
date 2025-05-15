import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beginner Host App</Text>
      <Button
        title="Go to Auth"
        onPress={() => Linking.openURL('beginnerauth://login')}
      />
      <Button
        title="Go to Payment"
        onPress={() => Linking.openURL('beginnerpayment://checkout')}
      />
      <Button
        title="Go to Cart"
        onPress={() => Linking.openURL('beginnercart://view')}
      />
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});