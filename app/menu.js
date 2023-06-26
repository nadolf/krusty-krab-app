import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

let itemList = [];

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={{ paddingHorizontal: 7, paddingVertical: 7 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          backgroundColor: "#fff",
          shadowColor: "black",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        }}
      />
    </View>
  );
};

const listTab = [
  {
    category: "All",
    image: require("../assets/images/All_Text.png"),
  },
  {
    category: "Patties",
    image: require("../assets/images/Krabby_Patty.png"),
  },
  {
    category: "Meals",
    image: require("../assets/images/KK_Meal.png"),
  },
  {
    category: "Drinks",
    image: require("../assets/images/KK_Soda.png"),
  },
  {
    category: "Sides",
    image: require("../assets/images/KK_Sides.png"),
  },
];

const data = [
  {
    name: "Krabby Patty",
    price: 1.25,
    category: "Patties",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Double Krabby Patty",
    price: 2.00,
    category: "Patties",
    image: require("../assets/images/Deluxe_Krabby_Patty.png"),
  },
  {
    name: "Triple Krabby Patty",
    price: 3.00,
    category: "Patties",
    image: require("../assets/images/Logo.png"),
  },
  {
    name: "Coral Bits",
    price: 1.00,
    category: "Sides",
    image: require("../assets/images/Coral_Bits.png"),
  },
  {
    name: "Kelp Rings",
    price: 1.50,
    category: "Sides",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Krabby Meal",
    price: 3.50,
    category: "Meals",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Double Krabby Meal",
    price: 3.75,
    category: "Meals",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Triple Krabby Meal",
    price: 4.00,
    category: "Meals",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Salty Sea Dog",
    price: 1.25,
    category: "Meals",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Sailors Surprise",
    price: 3.00,
    category: "Meals",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Kelp Shake",
    price: 2.00,
    category: "Drinks",
    image: require("../assets/images/KrabbyPatty.png"),
  },
  {
    name: "Seafoam Soda",
    price: 1.00,
    category: "Drinks",
    image: require("../assets/images/KrabbyPatty.png"),
  },
];

const MenuPage = () => {
  const [category, setStatus] = useState("All");
  const [datalist, setDataList] = useState(data);

  const setStatusFilter = (category) => {
    if (category !== "All") {
      setDataList([...data.filter((e) => e.category === category)]);
    } else {
      setDataList(data);
    }
    setStatus(category);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          {/*<Image
            style={styles.itemImage}
            source={item.image}
    />*/}
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
        <View
          style={[
            styles.itemStatus,
            { backgroundColor: item.category === "Purple" ? "Pink" : "Green" },
          ]}
        >
          <MaterialCommunityIcons
            name="plus"
            size={25}
            style={{ marginRight: 40 }}
            onPress={() => {
              itemList.push(item.name);
              console.log(itemList);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../assets/images/Logo.png")}
            style={{ width: 80, height: 80 }}
          />
          {/*<Text style={{color:'red', fontSize:20}}>Galley Grub</Text>*/}
        </View>
        <Search />
        <View style={styles.listTab}>
          {listTab.map((e) => (
            <TouchableOpacity
              style={[
                styles.btnTab,
                category === e.category && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.category)}
            >
              <Text
                style={
                  (styles.textTab,
                  category === e.category && styles.textTabActive)
                }
              >
                {/* {e.category}*/}
              </Text>
              <Image style={styles.itemImage} source={e.image} />
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          style={styles.items}
          data={datalist}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 3,
  },
  btnTab: {
    width: Dimensions.get("window").width / 6,
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: 10,
    margin: 5,
    justifyContent: "center",
    borderRadius: 10,
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: "#F8EACB",
  },
  textTabActive: {
    color: "black",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 3,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemImage: {
    width: 35,
    height: 35,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 18,
  },
  itemStatus: {
    justifyContent: "center",
  },
});
