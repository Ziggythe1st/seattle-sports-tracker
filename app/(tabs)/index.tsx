import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import mockGames from "../teams/mockGames";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seattle Sports</Text>
      <FlatList
        data={mockGames}
        keyExtractor={(item) => item.team}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.logo} style={styles.logo} />
            <View>
              <Text style={styles.teamName}>{item.team}</Text>
              <Text>{item.status}</Text>
              <Text>{item.detail}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  card: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  logo: { width: 50, height: 50, marginRight: 10 },
  teamName: { fontWeight: "bold", fontSize: 18 },
});
