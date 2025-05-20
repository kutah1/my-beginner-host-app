// InputFilter.js
import React, { useState, useEffect } from 'react'; // Import React and hooks
import { View, Text, TextInput } from 'react-native'; // Import React Native components

// InputFilter: A controlled input component for filtering users
const InputFilter = ({ value, onChange }) => {
  const [input, setInput] = useState(value); // Local state for the input value
  useEffect(() => { setInput(value); }, [value]); // Sync local state with prop changes
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Magnifying glass icon for UI clarity */}
      <Text style={{ marginRight: 8 }}>🔍</Text>
      {/* Input box for entering filter text */}
      <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 4, backgroundColor: '#fff' }}>
        <TextInput
          style={{ color: '#222', fontSize: 16 }} // Style the input
          placeholder="Type to filter..." // Placeholder text
          value={input} // Controlled value
          onChangeText={text => {
            setInput(text); // Update local state
            onChange(text); // Notify parent of change
          }}
          accessibilityLabel="User filter input" // Accessibility label
        />
      </View>
    </View>
  );
};

export default InputFilter; // Export the InputFilter component
