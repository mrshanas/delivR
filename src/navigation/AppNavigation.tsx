import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  HomeScreen,
  MenuScreen,
  OffersScreen,
  ProfileScreen,
  SettingsScreen,
} from "../screens";
import { COLORS, routes } from "../utils";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, size }) => {
          const color = focused ? COLORS.primary : COLORS.mediumGray;

          switch (route.name) {
            case routes.MENU_SCREEN:
              return (
                <MaterialCommunityIcons
                  name="dots-grid"
                  color={color}
                  size={size}
                />
              );

            case routes.OFFERS_SCREEN:
              return (
                <MaterialCommunityIcons
                  name="shopping"
                  color={color}
                  size={size}
                />
              );

            case routes.HOME_SCREEN:
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );

            case routes.PROFILE_SCREEN:
              return <FontAwesome color={color} name="user" size={size} />;

            case routes.SETTINGS_SCREEN:
              return (
                <MaterialCommunityIcons
                  color={color}
                  name="menu-open"
                  size={size}
                />
              );
          }
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.mediumGray,
        headerShown: false,
      })}
    >
      <Tab.Screen name={routes.MENU_SCREEN} component={MenuScreen} />
      <Tab.Screen name={routes.OFFERS_SCREEN} component={OffersScreen} />
      <Tab.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={routes.PROFILE_SCREEN} component={ProfileScreen} />
      <Tab.Screen
        name={routes.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}
