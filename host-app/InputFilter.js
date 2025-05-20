// InputFilter.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

// InputFilter: Controlled input for filtering users
const InputFilter = ({ value, onChange }) => {
  const [input, setInput] = useState(value);
  useEffect(() => { setInput(value); }, [value]);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginRight: 8 }}>🔍</Text>
      <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 4, backgroundColor: '#fff' }}>
        <TextInput
          style={{ color: '#222', fontSize: 16 }}
          placeholder="Type to filter..."
          value={input}
          onChangeText={text => {
            setInput(text);
            onChange(text);
          }}
          accessibilityLabel="User filter input"
        />
      </View>
    </View>
  );
};

export default InputFilter;
