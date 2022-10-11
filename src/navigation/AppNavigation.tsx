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
import { HomeButton } from "../components/Buttons";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        headerShown: false,
        initialRouteName: routes.HOME_SCREEN,
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

        tabBarStyle: {
          fontFamily: "Poppins",
          paddingHorizontal: -30,
        },
      })}
    >
      <Tab.Screen
        name={routes.MENU_SCREEN}
        component={MenuScreen}
        options={{
          title: "Menu",
        }}
      />
      <Tab.Screen
        name={routes.OFFERS_SCREEN}
        component={OffersScreen}
        options={{ title: "Offers" }}
      />
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarButton: ({ accessibilityState }) => {
            return (
              <HomeButton
                focused={accessibilityState?.selected}
                onPress={() => navigation.navigate(routes.HOME_SCREEN)}
              />
            );
          },
          tabBarItemStyle: {
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          },
          title: "",
        })}
      />
      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Tab.Screen
        name={routes.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ headerShown: true, title: "Settings" }}
      />
    </Tab.Navigator>
  );
}
