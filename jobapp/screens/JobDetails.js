import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

export default function JobDetails({ route }) {
  const { job } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: job.logo }} style={styles.logo} />
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.sectionTitle}>Job Responsibilities</Text>
      <Text style={styles.description}>{job.description}</Text>
      <Button title="Apply Now" onPress={() => alert('Application Submitted!')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
});
