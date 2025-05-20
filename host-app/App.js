import React, { createContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserProvider, UserContext } from './UserContext';
import UserList from './UserList';
import UserDetails from './UserDetails';

export const AppContext = createContext(); // Move AppContext to module scope so it can be imported elsewhere

const App = () => {
  return (
    <UserProvider>
      <View style={styles.container}>
        <UserContext.Consumer>
          {({ state }) => (
            state.selectedUser ? <UserDetails /> : <UserList />
          )}
        </UserContext.Consumer>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default App;