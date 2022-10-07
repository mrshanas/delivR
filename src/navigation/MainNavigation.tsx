import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

export default function MainNavigation() {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
}
