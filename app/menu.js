import React, { Component } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Searchbar } from "react-native-paper";

let itemList = [];

class Item extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //line 34: <Text>Total:{this.state.count}</Text>
  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.onPress}></TouchableOpacity>
        <View></View>
        <Card.Title
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            marginVertical: 3,
            shadowColor: "black",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          title={this.props.name}
          subtitle={this.props.price}
          right={() => (
            <MaterialCommunityIcons
              name="plus"
              size={25}
              style={{ marginRight: 40 }}
              onPress={() => {
                itemList.push(this.props.id);
                console.log(itemList);
                this.setState({
                  count: this.state.count + this.props.price,
                });
              }}
            />
          )}
        />
      </View>
    );
  }
}

class MenuTab extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default class MenuPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/Logo.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>GALLEY GRUB</Text>
          </View>
          <Search />
          <Item name="KRABBY PATTY" price={1.25} id="1" />
          <Item name="DOUBLE KRABBY PATTY" price={2.0} id="2" />
          <Item name="TRIPLE KRABBY PATTY" price={3.0} id=" 3" />
          <Item name="CORAL BITS" price={1.25} id="4" />
          <Item name="KELP RINGS" price={1.5} id="5" />
          <Item name="KRABBY MEAL" price={3.5} id="6" />
          <Item name="DOUBLE KRABBY MEAL" price={3.75} id="7" />
          <Item name="TRIPLE KRABBY MEAL" price={4.0} id="8" />
          <Item name="SALTY SEA DOG" price={1.25} id="9" />
          <Item name="SAILORS SURPRISE" price={3.0} id="10" />
          <Item name="KELP SHAKE" price={2.0} id="11" />
          <Item name="SEAFOAM SODA" price={1.0} id="12" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
