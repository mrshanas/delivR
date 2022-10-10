import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { AppButton } from "../components/Buttons";
import { COLORS, routes } from "../utils";

export default function Login({ navigation }: any) {
  return (
    <SafeAreaScreen>
      <View style={styles.textContainer}>
        <AppText style={styles.loginText}>Login</AppText>
        <AppText style={styles.detailsText}>Add details to your login</AppText>
      </View>

      <View style={styles.inputContainer}>
        <AppTextInput
          //@ts-ignore
          placeholder="Your Email"
          onTextChange={() => console.log("typed")}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          //@ts-ignore
          placeholder="Password"
          secureTextEntry
          onTextChange={() => console.log("typed")}
        />
      </View>

      <View style={styles.loginBtn}>
        <AppButton primary onPress={() => console.log("Login")}>
          Login
        </AppButton>
      </View>
      <View>
        <TouchableWithoutFeedback
          onPress={() => console.log("To reset password")}
        >
          <AppText style={styles.grayText}>Forgot Password?</AppText>
        </TouchableWithoutFeedback>
      </View>

      <View style={{ marginVertical: 15 }}>
        <AppText style={[{ fontSize: 18 }, styles.grayText]}>Or</AppText>
      </View>
      {/* Social btns  */}
      <View style={styles.socialBtnsContainer}>
        <AppButton
          extraStyles={styles.socialBtn}
          onPress={() => console.log("Login with Google")}
          primary
        >
          Login with Google
        </AppButton>
        <AppButton
          extraStyles={styles.socialBtn}
          onPress={() => console.log("Login with Facebook")}
          primary
        >
          Login with Facebook
        </AppButton>

        {/* Link to SignUp Page  */}
        <View style={styles.signUpContainer}>
          <AppText style={[{ fontSize: 16 }, styles.grayText]}>
            Dont have an account?{" "}
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
            >
              <AppText style={styles.primaryText}>Sign Up</AppText>
            </TouchableWithoutFeedback>
          </AppText>
        </View>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  detailsText: {
    marginVertical: 5,
  },
  grayText: {
    color: COLORS.mediumGray,
  },
  inputContainer: {
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
  },
  loginBtn: {
    marginVertical: 10,
    width: "90%",
  },
  loginText: {
    fontSize: 30,
    marginVertical: 5,
  },
  primaryText: {
    color: COLORS.primary,
    fontWeight: "500",
  },
  signUpContainer: {
    marginVertical: 50,
  },
  socialBtn: {
    marginVertical: 10,
  },
  socialBtnsContainer: {
    alignItems: "center",
    width: "90%",
  },
  textContainer: {
    alignItems: "center",
  },
});
