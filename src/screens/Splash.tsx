import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../utils";

export default function Splash() {
  return (
    <ImageBackground
      source={require("../assets/images/welcomebg.svg")}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/monkey.svg")}
        style={styles.img}
      />
      <Text style={styles.text}>Meal Monkey</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: "100%",
  },
  text: {
    color: COLORS.black,
  },
});
