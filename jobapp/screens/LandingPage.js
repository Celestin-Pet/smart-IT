import React from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, Image } from 'react-native';
import JobCard from '../components/JobCard';
import data from '../Data';

export default function LandingPage({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello</Text>
        <Text style={styles.username}>Leslie Alexander</Text>
        <Image source={require('../assets/notification-icon.png')} style={styles.notificationIcon} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommendation</Text>
        <FlatList
          data={data.recommendations}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { job: item })} />
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    fontSize: 18,
    color: '#fff',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
