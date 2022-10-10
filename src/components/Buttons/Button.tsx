import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC, ReactNode } from "react";

import { COLORS } from "../../utils";

interface Props {
  children: ReactNode;
  onPress: () => void;
  outline?: boolean;
  primary?: boolean;
  extraStyles?: object;
}

const Button: FC<Props> = ({
  children,
  extraStyles,
  onPress,
  outline,
  primary,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        outline ? styles.outline : styles.primary,
        extraStyles,
      ]}
    >
      <Text
        style={[primary ? { color: COLORS.white } : { color: COLORS.primary }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    width: "100%",
  },
  outline: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: COLORS.black,
  },
  primary: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
});
