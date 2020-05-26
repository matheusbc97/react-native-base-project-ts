import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  canGoBack: boolean | undefined;
}

const HeaderLeft = ({canGoBack}: Props) => {
  const navigation = useNavigation<any>();

  if (canGoBack) {
    return (
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.iconWrapper}>
        <Icon style={styles.iconColor} name="arrow-left" size={22} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.iconWrapper}>
      <Icon style={styles.iconColor} name="bars" size={22} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  iconWrapper: {padding: 5, marginLeft: 16},
  iconColor: {
    color: 'white',
  },
});
