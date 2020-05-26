import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  text: string;
}

const EmptyListText = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default EmptyListText;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {padding: 20},
});
