import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import {styles} from './style-text-field'

export const UniversalInput = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  value,
}) => {
  const [text, setText] = useState(value || '');

  const handleChangeText = (newText) => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{placeholder || "БЛА БЛА"}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={handleChangeText}
        value={text}
      />
    </View>
  );
};

