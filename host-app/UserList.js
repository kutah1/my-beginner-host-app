// UserList.js
import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { UserContext } from './UserContext';
import InputFilter from './InputFilter';

// UserList: Consumes context, displays users, and allows selection/filtering
const UserList = () => {
  const { state, selectUser, setFilter } = useContext(UserContext);

  // Filter users by name/email/username
  const filteredUsers = state.users.filter(user =>
    user.name.toLowerCase().includes(state.filter.toLowerCase()) ||
    user.email.toLowerCase().includes(state.filter.toLowerCase()) ||
    user.username.toLowerCase().includes(state.filter.toLowerCase())
  );

  // Render each user
  const renderItem = ({ item }) => (
    <View style={{ padding: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
      <Text style={{ fontWeight: 'bold', color: '#222' }}>{item.name}</Text>
      <Text style={{ color: '#555' }}>{item.email} | @{item.username}</Text>
      <Button title="View Details" onPress={() => selectUser(item)} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>User Directory</Text>
      <Text style={{ marginBottom: 4 }}>Search by name, email, or username:</Text>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginBottom: 8 }}>
            <InputFilter onChange={setFilter} value={state.filter} />
          </View>
        }
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={{ color: '#888', textAlign: 'center', marginTop: 20 }}>
            {state.loading ? 'Loading users...' : 'No users found.'}
          </Text>
        )}
      />
    </View>
  );
};

export default UserList;
