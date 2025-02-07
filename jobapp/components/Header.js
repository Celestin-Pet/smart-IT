import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Header({ title, showNotificationIcon, onNotificationPress }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {showNotificationIcon && (
        <TouchableOpacity onPress={onNotificationPress}>
          <Image source={require('../assets/notification-icon1.png')} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
  },
});


