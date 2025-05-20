// Import hooks and components from React and React Native
import React from 'react';
import { View } from 'react-native';

// Import context and components
import { UserProvider, UserContext } from './UserContext';
import UserList from './UserList';
import UserDetails from './UserDetails';

// 8. App: Wraps everything in UserProvider and shows either list or details
const App = () => {
  return (
    <UserProvider>
      <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
        <UserContext.Consumer>
          {({ state }) => (
            state.selectedUser ? <UserDetails /> : <UserList />
          )}
        </UserContext.Consumer>
      </View>
    </UserProvider>
  );
};

export default App;