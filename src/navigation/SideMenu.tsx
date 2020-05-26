import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {Avatar} from 'react-native-paper';

import {resetUser} from '../store/account/user';

const SideMenu = (props: any) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Avatar.Text
          label="MBC"
          size={110}
          style={styles.avatar}
          labelStyle={styles.avatarLabel}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={() => dispatch(resetUser())} />
    </DrawerContentScrollView>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {backgroundColor: 'red'},
  avatarLabel: {fontSize: 40},
});
