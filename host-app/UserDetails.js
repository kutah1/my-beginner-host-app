import React, { useContext } from 'react'; // Import React and useContext hook
import { View, Text, Button } from 'react-native'; // Import React Native components
import { UserContext } from './UserContext'; // Import user context

// UserDetails: Shows details for the selected user
const UserDetails = () => {
  const { state, clearSelected } = useContext(UserContext); // Get state and clearSelected from context
  const user = state.selectedUser; // Get the selected user
  if (!user) return null; // If no user is selected, render nothing
  return (
    <View style={{ padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8, marginVertical: 10 }}>
      {/* Display user details */}
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
      <Text>Company: {user.company.name}</Text>
      <Text>Address: {user.address.street}, {user.address.city}</Text>
      {/* Button to go back to the user list */}
      <Button title="Back to List" onPress={clearSelected} />
    </View>
  );
};

export default UserDetails; // Export the UserDetails component
