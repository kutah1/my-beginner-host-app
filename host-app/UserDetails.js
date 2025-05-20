// UserDetails.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from './UserContext';

// UserDetails: Shows details for the selected user
const UserDetails = () => {
  const { state, clearSelected } = useContext(UserContext);
  const user = state.selectedUser;
  if (!user) return null;
  return (
    <View style={{ padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8, marginVertical: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
      <Text>Company: {user.company.name}</Text>
      <Text>Address: {user.address.street}, {user.address.city}</Text>
      <Button title="Back to List" onPress={clearSelected} />
    </View>
  );
};

export default UserDetails;
