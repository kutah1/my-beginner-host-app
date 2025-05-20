import React from 'react'; // Import React
import { View, StyleSheet } from 'react-native'; // Import React Native components
import { UserProvider, UserContext } from './UserContext'; // Import context provider and context
import UserList from './UserList'; // Import user list component
import UserDetails from './UserDetails'; // Import user details component

// Main App component
const App = () => {
  return (
    // UserProvider: Makes user state/actions available to all children
    <UserProvider>
      <View style={styles.container}>
        {/* Use UserContext.Consumer to access state and decide which component to show */}
        <UserContext.Consumer>
          {({ state }) =>
            state.selectedUser ? <UserDetails /> : <UserList />
          }
        </UserContext.Consumer>
      </View>
    </UserProvider>
  );
};

// Styles for the app container
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    padding: 16, // Add padding around the content
    backgroundColor: '#fff', // Set background color to white
  },
});

export default App; // Export the App component as default