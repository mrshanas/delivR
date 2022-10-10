import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { RestaurantCard } from "../components/Cards";
import { COLORS } from "../utils";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      id: 1,
      name: "Offers",
      img: require("../assets/images/cookie.jpg"),
    },
    {
      id: 2,
      name: "Italian",
      img: require("../assets/images/pizza.jpg"),
    },
    {
      id: 3,
      name: "Indian",
      img: require("../assets/images/salmon.jpg"),
    },
    {
      id: 4,
      name: "Chinese",
      img: require("../assets/images/pizza.jpg"),
    },
  ];

  const showModal = () => setIsModalOpen((prev) => !prev);

  return (
    <SafeAreaScreen>
      <ScrollView style={styles.container}>
        {/* Cart and Greeting Text  */}
        <View style={styles.cartContainer}>
          <AppText style={styles.greetingText}>Good evening Shanas!</AppText>
          <MaterialCommunityIcons name="cart" size={30} />
        </View>

        {/* Delivering location section  */}
        <View>
          <AppText style={styles.deliverText}>Delivering To</AppText>
          <View style={styles.locationContainer}>
            <AppText style={styles.locationText}>Current Location</AppText>
            <TouchableWithoutFeedback onPress={showModal}>
              <MaterialCommunityIcons
                color={COLORS.primary}
                name="chevron-down"
                size={30}
              />
            </TouchableWithoutFeedback>

            {/* Location Modal  */}
            <Modal visible={isModalOpen} animationType="slide">
              <TouchableWithoutFeedback onPress={showModal}>
                <MaterialCommunityIcons name="close" size={30} />
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        </View>

        {/* Search Bar  */}
        <View style={styles.searchBar}>
          <AppTextInput
            leftIcon="search"
            onTextChange={() => console.log("Search")}
            //@ts-ignore
            placeholder="Search food"
          />
        </View>

        {/* Scroll Categories  */}
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <View style={styles.imgContainer}>
              <Image source={item.img} style={styles.img} />
              <AppText>{item.name}</AppText>
            </View>
          )}
          style={styles.scrollContainer}
        />

        {/* Popular Restaurants  */}
        <View style={styles.popularResContainer}>
          {/* Heading  */}
          <View style={styles.popularResHeading}>
            <AppText>Popular Restaurants</AppText>
            <TouchableWithoutFeedback
              onPress={() => console.log("Navigate to Restaurants")}
            >
              <AppText style={styles.primaryText}>View All</AppText>
            </TouchableWithoutFeedback>
          </View>

          {/* Restaurants  */}
          <RestaurantCard
            name="Nasmart"
            location="Buza, Dar es Salaam"
            img={require("../assets/images/pizza.jpg")}
            ratings={4.9}
          />
          <RestaurantCard
            name="KFC"
            location="Masaki, Dar es Salaam"
            img={require("../assets/images/salmon.jpg")}
            ratings={4.7}
          />
        </View>
      </ScrollView>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
  },
  container: {
    marginHorizontal: "auto",
    width: "95%",
  },

  deliverText: {
    color: COLORS.mediumGray,
    fontWeight: "400",
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "300",
  },
  img: {
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  imgContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  locationContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  locationText: {
    fontWeight: "500",
    marginRight: 10,
  },
  popularResContainer: {
    marginTop: 10,
  },
  popularResHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    color: COLORS.primary,
  },
  searchBar: {
    marginVertical: 10,
  },
  scrollContainer: {
    marginVertical: 15,
  },
});
