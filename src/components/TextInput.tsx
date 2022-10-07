import { StyleSheet, TextInput } from "react-native";

import { COLORS } from "../utils";

interface Props {
  extraStyles?: object;
  onTextChange: () => void;
  otherProps?: any;
}

const Input = ({ extraStyles, onTextChange, ...otherProps }: Props) => {
  return (
    <>
      <TextInput
        onChangeText={onTextChange}
        style={[styles.input, extraStyles]}
        {...otherProps}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 15,
    padding: 15,
    width: "100%",
  },
});
