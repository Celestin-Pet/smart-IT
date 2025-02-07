import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";

const LandingPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Hello Leslie Alexander</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search job, company, etc..."
        />
      </View>

      <Text style={styles.sectionTitle}>Recommendation</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Image source={require("../assets/google-logo.png")} style={styles.icon} />
          <Text style={styles.jobTitle}>Motion Designer</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("JobDetails")}
          >
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  headerContainer: { padding: 20, backgroundColor: "#4285F4" },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  searchInput: { marginTop: 15, backgroundColor: "#fff", padding: 10, borderRadius: 8 },
  sectionTitle: { margin: 20, fontSize: 20, fontWeight: "bold" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 20,
    width: 200,
  },
  jobTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  button: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  icon: { width: 40, height: 40 },
});

export default LandingPage;
