import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeScreen,
  MenuScreen,
  OffersScreen,
  ProfileScreen,
  SettingsScreen,
} from "../screens";
import { routes } from "../utils";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.MENU_SCREEN} component={MenuScreen} />
      <Tab.Screen name={routes.OFFERS_SCREEN} component={OffersScreen} />
      <Tab.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={routes.PROFILE_SCREEN} component={ProfileScreen} />
      <Tab.Screen name={routes.SETTINGS_SCREEN} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
