import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text }>Hello Expo!, This is Sai, Hurrah, We Successfully build an

        Expo App


      </Text>
      <Link href={"/about"} style={styles.button}>Go To About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",

  },
  text:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  button:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"#fff",
    marginTop:20,
  }
});