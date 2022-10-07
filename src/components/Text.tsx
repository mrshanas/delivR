import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppText = ({ children }: any) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({});
