// import React, { useState, useEffect, useCallback } from 'react'; // Use named import for React
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   View,
//   TextInput,
//   Button
// } from 'react-native';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   // Fetch data from API and update state
//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) throw new Error('Network response was not ok');
//       const json = await response.json();
//       setData(json);
//     } catch (e) {
//       setData([]);
//     }
//   }, []);

//   // Fetch data every 1 second
//   useEffect(() => {
//     fetchData(); // Initial fetch
//     const timer = setInterval(fetchData, 1000);
//     return () => clearInterval(timer);
//   }, [fetchData]);

//   // Search for exact and similar matches
//   const handleSearch = () => {
//     if (!searchTerm) {
//       setSearchResults([]);
//       return;
//     }
//     const term = searchTerm.toString().toLowerCase(); // Convert to string and lowercase
//     // Filter data for exact matches and similar matches
//     // Exact matches are items where the id matches the search term
//     // Similar matches are items where the id contains the search term or the title/body contains the search term
//     // Note: The id is converted to string for comparison
//     const exactMatches = data.filter(item => item.id.toString() === term); // Exact match
//     // Similar matches are items where the id contains the search term or the title/body contains the search term
//     const similarMatches = data.filter(
//       item =>
//         (item.id.toString().includes(term) && item.id.toString() !== term) || // Similar match
//         (item.title && item.title.toLowerCase().includes(term)) || // Similar match
//         (item.body && item.body.toLowerCase().includes(term)) // Similar match
//     );
//     const combined = [...exactMatches, ...similarMatches.filter(item => !exactMatches.includes(item))]; // Combine exact and similar matches
//     setSearchResults(combined); // Combine exact and similar matches 

//   };

//   // Render each item in the FlatList
//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.itemTitle}>{item.title}</Text>
//       {item.body ? <Text style={styles.itemBody}>{item.body}</Text> : null}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Search Section */}
//       <View style={styles.searchSection}>
//         <Text style={styles.label}>Search by ID, title, or text:</Text>
//         <View style={styles.inputRow}>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter id, title, or text"
//             value={searchTerm}
//             onChangeText={setSearchTerm}
//             returnKeyType="search"
//             onSubmitEditing={handleSearch}
//             accessibilityLabel="Search input"
//           />
//           <Button title="Search" onPress={handleSearch} accessibilityLabel="Search button" />
//         </View>
//       </View>
//       {/* Show search results if searching, else show all data */}
//       {(searchTerm && searchResults.length > 0) ? (
//         <FlatList
//           data={searchResults}
//           keyExtractor={item => item.id.toString()}
//           renderItem={renderItem}
//           style={styles.list}
//         />
//       ) : searchTerm && searchResults.length === 0 ? (
//         <Text style={styles.text}>No matches found</Text>
//       ) : data && data.length > 0 ? (
//         <FlatList
//           data={data}
//           keyExtractor={item => item.id.toString()}
//           renderItem={renderItem}
//           style={styles.list}
//         />
//       ) : (
//         <Text style={styles.text}>No data yet</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: '30%',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontWeight: '300',
//     fontSize: 20,
//     color: 'black',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   btn: {
//     width: '40%',
//     alignSelf: 'center',
//     marginVertical: 10,
//   },
//   list: {
//     marginTop: 20,
//     width: '100%',
//   },
//   itemContainer: {
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     borderRadius: 6,
//   },
//   itemTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#333',
//   },
//   itemBody: {
//     fontSize: 14,
//     color: '#555',
//   },
//   searchSection: {
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     width: '100%',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#222',
//     marginBottom: 5,
//   },
//   inputRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 8,
//     marginRight: 10,
//     backgroundColor: '#fff',
//     color: '#222',
//   },
// });

// export default App;




import React, { useState, createContext } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Cart from './Cart';

export const AppContext = createContext(); // Move AppContext to module scope so it can be imported elsewhere

const App = () => {
  const [num, setNumber] = useState(0);

  return (
    <View>
      <AppContext.Provider value={num}>
        <Text>{num}</Text>
        <TouchableOpacity>
          <Button title='Increase' onPress={() => { setNumber(num + 4) }} />
        </TouchableOpacity>
        <Text>{num}
          <Cart />
        </Text>
      </AppContext.Provider>
    </View>
  );
}

export default App;