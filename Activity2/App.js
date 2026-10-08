import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>

          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsText}>⚙</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
            style={styles.avatar}
          />

          <Text style={styles.name}>Mike Tingzon</Text>
          <Text style={styles.username}>@mikecjtingzon</Text>
          <Text style={styles.bio}>
            Student • Designer • Coffee lover ☕
          </Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Statistics */}
        <View style={styles.statsCard}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>128</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>2.4K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>356</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        {/* About */}
        <Text style={styles.sectionTitle}>About Me</Text>

        <View style={styles.aboutCard}>
          <View style={styles.infoRow}>
            <Text style={styles.icon}>📍</Text>
            <View>
              <Text style={styles.infoTitle}>Location</Text>
              <Text style={styles.infoText}>Cebu, Philippines</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.icon}>🎓</Text>
            <View>
              <Text style={styles.infoTitle}>Education</Text>
              <Text style={styles.infoText}>ABC University</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.icon}>💼</Text>
            <View>
              <Text style={styles.infoTitle}>Occupation</Text>
              <Text style={styles.infoText}>UI/UX Designer</Text>
            </View>
          </View>
        </View>

        {/* Interests */}
        <Text style={styles.sectionTitle}>Interests</Text>

        <View style={styles.interests}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>🎨 Design</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>💻 Coding</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>🎮 Gaming</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>📷 Photography</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>🎵 Music</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>

        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Text>❤️</Text>
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>
              You liked a post
            </Text>
            <Text style={styles.activityTime}>
              2 hours ago
            </Text>
          </View>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Text>💬</Text>
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>
              You commented on a post
            </Text>
            <Text style={styles.activityTime}>
              Yesterday
            </Text>
          </View>
        </View>

        {/* Bottom Space */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  header: {
    height: 70,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#171A2B",
  },

  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F0F2F8",
    alignItems: "center",
    justifyContent: "center",
  },

  settingsText: {
    fontSize: 20,
  },

  profileCard: {
    margin: 18,
    padding: 24,
    borderRadius: 24,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 53,
    borderWidth: 4,
    borderColor: "#6C63FF",
    marginBottom: 12,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#171A2B",
  },

  username: {
    fontSize: 14,
    color: "#8A8FA3",
    marginTop: 3,
  },

  bio: {
    fontSize: 14,
    color: "#5E6377",
    marginTop: 12,
    textAlign: "center",
  },

  editButton: {
    marginTop: 18,
    paddingVertical: 11,
    paddingHorizontal: 32,
    borderRadius: 25,
    backgroundColor: "#6C63FF",
  },

  editButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  statsCard: {
    marginHorizontal: 18,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  stat: {
    alignItems: "center",
    flex: 1,
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#171A2B",
  },

  statLabel: {
    fontSize: 12,
    color: "#8A8FA3",
    marginTop: 4,
  },

  divider: {
    width: 1,
    height: 35,
    backgroundColor: "#E4E6EE",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#171A2B",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },

  aboutCard: {
    marginHorizontal: 18,
    padding: 18,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  icon: {
    fontSize: 22,
    width: 45,
  },

  infoTitle: {
    fontSize: 13,
    color: "#8A8FA3",
    marginBottom: 3,
  },

  infoText: {
    fontSize: 15,
    color: "#25283A",
    fontWeight: "500",
  },

  interests: {
    marginHorizontal: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  tag: {
    backgroundColor: "#EDEBFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  tagText: {
    color: "#5B52D6",
    fontSize: 13,
    fontWeight: "600",
  },

  activityCard: {
    marginHorizontal: 18,
    marginBottom: 10,
    padding: 15,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },

  activityIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F0F1F8",
    alignItems: "center",
    justifyContent: "center",
  },

  activityContent: {
    marginLeft: 13,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#25283A",
  },

  activityTime: {
    fontSize: 12,
    color: "#999DAE",
    marginTop: 4,
  },
});