import { StyleSheet, Text, View } from "react-native";

const AppText = ({ children, ...otherProps }: any) => {
  return (
    <Text style={[styles.typography, otherProps?.style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  typography: {
    fontFamily: "Poppins",
  },
});
