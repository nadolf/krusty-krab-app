import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

//const [visible, setVisible] = React.useState(false);
//const onToggleSnackBar = () => setVisible(!visible);
class Item extends Component {
  render() {
    return (
      <View>
        <Card.Title
          style={{ borderBottomWidth: 0.5, borderBottomColor: "grey" }}
          title={this.props.name}
          subtitle={this.props.price}
          right={() => (
            <MaterialCommunityIcons
              name="plus"
              size={25}
              style={{ marginRight: 40 }}
              onPress={() => {
                console.log(this.props.statement);
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
      <ScrollView>
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
    );
  }
}
