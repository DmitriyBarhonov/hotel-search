import React from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import {styles} from './style-button' 

export const UniversalButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity >
      {/* <View style={styles.button}> */}
        <Button onPress={onPress} title={title} style={styles.button}></Button>
      {/* </View> */}
    </TouchableOpacity>
  );
};
