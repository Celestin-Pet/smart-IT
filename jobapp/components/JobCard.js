import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function JobCard({ job, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: job.logo }} style={styles.logo} />
      <View>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
      <Text style={styles.salary}>{job.salary}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  salary: {
    marginLeft: 'auto',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
