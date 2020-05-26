import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import Text from './Text';

interface Props {
  text: string;
  onPress?(): void;
}

const RoudedButton = ({text, onPress}: Props) => {
  return (
    <TouchableRipple style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableRipple>
  );
};

export default RoudedButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'red',
    width: 135,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
