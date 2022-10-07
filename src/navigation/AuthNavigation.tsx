import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routes } from "../utils";
import { LoginScreen, SignUpScreen, WelcomeScreen } from "../screens";

export default function AuthNavigation() {
  // const isNewUser = true;

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={routes.SIGNUP_SCREEN} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
