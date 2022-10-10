import { StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { COLORS } from "../utils";

interface Props {
  extraStyles?: object;
  leftIcon?: string;
  onTextChange: () => void;
  otherProps?: any;
}

const Input = ({
  extraStyles,
  leftIcon,
  onTextChange,
  ...otherProps
}: Props) => {
  return (
    <View style={[styles.inputContainer, extraStyles]}>
      {leftIcon && ( //@ts-ignore
        <MaterialIcons name={leftIcon} size={30} />
      )}
      <TextInput
        onChangeText={onTextChange}
        style={[styles.input]}
        {...otherProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 10,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
    width: "100%",
    borderRadius: 15,
  },
});
