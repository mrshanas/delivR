import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

export default function MainNavigation() {
  const isLoggedIn = false;
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
}
