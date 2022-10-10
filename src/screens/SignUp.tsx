import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { AppButton } from "../components/Buttons";
import { COLORS, routes } from "../utils";

export default function SignUp({ navigation }: any) {
  return (
    <SafeAreaScreen>
      <View style={styles.textContainer}>
        <AppText style={styles.signUpText}>Sign Up</AppText>
        <AppText style={styles.detailsText}>Add details to your signup</AppText>
      </View>
      <ScrollView style={styles.inputContainer}>
        <AppTextInput
          onTextChange={() => console.log("Text changed")}
          //@ts-ignore
          placeholder="Name"
        />
        <AppTextInput
          extraStyles={styles.input}
          onTextChange={() => console.log("Text changed")}
          //@ts-ignore
          placeholder="Email"
        />
        <AppTextInput
          extraStyles={styles.input}
          onTextChange={() => console.log("Text changed")}
          //@ts-ignore
          placeholder="Mobile No."
        />
        <AppTextInput
          extraStyles={styles.input}
          onTextChange={() => console.log("Text changed")}
          //@ts-ignore
          placeholder="Address"
        />

        <AppTextInput
          extraStyles={styles.input}
          onTextChange={() => console.log("Text changed")}
          //@ts-ignore
          placeholder="Password"
          secureTextEntry
        />
        <AppTextInput
          extraStyles={styles.input}
          onTextChange={() => console.log("Text changed")}
          //@ts-ignore
          placeholder="Confirm Password"
          secureTextEntry
        />
        <View style={styles.signUp}>
          <AppButton primary onPress={() => console.log("sign up")}>
            Sign Up
          </AppButton>
        </View>
        <View style={styles.already}>
          <AppText style={[{ fontSize: 16 }, styles.grayText]}>
            Already have an account?{" "}
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
            >
              <AppText style={styles.primaryText}>Login</AppText>
            </TouchableWithoutFeedback>
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  already: {
    alignItems: "center",
    marginVertical: 10,
  },
  detailsText: {
    marginVertical: 5,
  },
  grayText: {
    color: COLORS.mediumGray,
  },
  input: {
    marginVertical: 8,
  },
  inputContainer: {
    marginVertical: 20,
    width: "90%",
  },
  primaryText: {
    color: COLORS.primary,
    fontWeight: "500",
  },
  signUp: {
    width: "100%",
    marginVertical: 10,
  },
  signUpText: {
    fontSize: 30,
    marginVertical: 5,
  },
  textContainer: {
    alignItems: "center",
  },
});
