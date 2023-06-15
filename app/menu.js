import React, { Component } from "react";
import { View, ScrollView, SafeAreaView, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

//const [visible, setVisible] = React.useState(false);
//const onToggleSnackBar = () => setVisible(!visible);
let itemList = [];

class Item extends Component {
  render() {
    return (
      <View>
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
                itemList.push(this.props.statement);
                console.log(itemList);
              }}
            />
            //<Button onPress={onToggleSnackBar}>{visible ? "+" : "-"}</Button>
          )}
        />
      </View>
    );
  }
}

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
          <Item name="KRABBY PATTY" price="1.25" statement="button 1" />
          <Item name="DOUBLE KRABBY PATTY" price="2.00" statement="button 2" />
          <Item name="TRIPLE KRABBY PATTY" price="2.00" statement="button 2" />
          <Item name="CORAL BITS" price="1.25" statement="button 4" />
          <Item name="KELP RINGS" price="1.50" statement="button 5" />
          <Item name="KRABBY MEAL" price="3.50" statement="button 6" />
          <Item name="DOUBLE KRABBY MEAL" price="3.75" statement="button 7" />
          <Item name="TRIPLE KRABBY MEAL" price="4.00" statement="button 8" />
          <Item name="SALTY SEA DOG" price="1.25" statement="button 9" />
          <Item name="SAILORS SURPRISE" price="3.00" statement="button 10" />
          <Item name="KELP SHAKE" price="2.00" statement="button 11" />
          <Item name="SEAFOAM SODA" price="1.00" statement="button 12" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
