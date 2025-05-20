import React, { useContext } from 'react'; // Import React and useContext hook
import { View, Text, Button, FlatList } from 'react-native'; // Import React Native components
import { UserContext } from './UserContext'; // Import user context
import InputFilter from './InputFilter'; // Import input filter component

// UserList: Consumes context, displays users, and allows selection/filtering
const UserList = () => {
  const { state, selectUser, setFilter } = useContext(UserContext); // Get state and actions from context

  // Filter users by name/email/username using the filter string
  const filteredUsers = state.users.filter(user =>
    user.name.toLowerCase().includes(state.filter.toLowerCase()) ||
    user.email.toLowerCase().includes(state.filter.toLowerCase()) ||
    user.username.toLowerCase().includes(state.filter.toLowerCase())
  );

  // Render each user in the list
  const renderItem = ({ item }) => (
    <View style={{ padding: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
      {/* User's name */}
      <Text style={{ fontWeight: 'bold', color: '#222' }}>{item.name}</Text>
      {/* User's email and username */}
      <Text style={{ color: '#555' }}>{item.email} | @{item.username}</Text>
      {/* Button to select user */}
      <Button title="View Details" onPress={() => selectUser(item)} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Title and search instructions */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>User Directory</Text>
      <Text style={{ marginBottom: 4 }}>Search by name, email, or username:</Text>
      {/* FlatList for user list, with filter input as header */}
      <FlatList
        ListHeaderComponent={
          <View style={{ marginBottom: 8 }}>
            <InputFilter onChange={setFilter} value={state.filter} /> {/* Filter input */}
          </View>
        }
        data={filteredUsers} // Filtered user data
        renderItem={renderItem} // Render each user
        keyExtractor={item => item.id.toString()} // Unique key for each user
        ListEmptyComponent={() => (
          <Text style={{ color: '#888', textAlign: 'center', marginTop: 20 }}>
            {state.loading ? 'Loading users...' : 'No users found.'}
          </Text>
        )}
      />
    </View>
  );
};

export default UserList; // Export the UserList component
