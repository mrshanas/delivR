import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../utils";

type Props = {
  focused?: boolean;
  onPress: () => void;
};

const HomeButton = ({ focused, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.container, focused ? styles.focused : styles.notFocused]}
      >
        <MaterialCommunityIcons name="home" color={COLORS.white} size={50} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // borderBottomWidth: 5,
    // borderColor: COLORS.mediumGray,
    // borderWidth: 5,
    borderRadius: 30,
    bottom: 20,
    color: COLORS.white,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
  focused: {
    backgroundColor: COLORS.primary,
  },
  notFocused: {
    backgroundColor: COLORS.mediumGray,
  },
});
