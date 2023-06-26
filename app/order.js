import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Avatar } from "react-native-paper";
import SwitchSelector from "react-native-switch-selector";



function OrderPage() {
    const options = [
      { label: "Delivery", value: "1" },
      { label: "Pick Up", value: "2" },
    ];
    return (
      <SafeAreaView>
        <ScrollView>
          {/* Heading*/}
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../assets/images/Logo.png")}
              style={{ width: 80, height: 80 }}
            />
            <Text>ORDER</Text>
          </View>
          {/* Order Items*/}
          <FlatList
            data={[
              {
                id: "1",
                name: "KRABBY PATTY",
                price: 1.25,
                image: require("../assets/images/KrabbyPatty.png"),
              },
              {
                id: "2",
                name: "DOUBLE KRABBY PATTY",
                price: 2.00,
                image: require("../assets/images/Deluxe_Krabby_Patty.png"),
              },
              {
                id: "3",
                name: "TRIPLE KRABBY PATTY",
                price: 3.00,
                image: require("../assets/images/Logo.png"),
              },
              {
                id: "4",
                name: "CORAL BITS",
                price: 1.25,
                image: require("../assets/images/Coral_Bits.png"),
              },
            ]}
            renderItem={({ item }) => (
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
                title={item.name}
                subtitle={item.price}
                left={(props) => (
                  <Image source={item.image} style={{ width: 50, height: 50 }} />
                )}
                right={() => (
                  <MaterialCommunityIcons
                    name="close"
                    size={25}
                    style={{ marginRight: 40 }}
                    onPress={() => {
                      //itemList.push(this.props.statement);
                      //console.log(itemList);
                    }}
                  />
                  //<Button onPress={onToggleSnackBar}>{visible ? "+" : "-"}</Button>
                )}
              />
            )}
          />
          <View style={{ alignItems:"center"}}>
            <View style={{ width:"50%", margin:"5%"}}>
              <SwitchSelector
                options={options}
                initial={0}
                textColor= "#41b6e6"
                buttonColor="#41b6e6"
                height={30}
                onPress={(value) =>
                  console.log(`Call onPress with value: ${value}`)
                }
              />
              </View>
              <Text>Total: $ {}</Text>
              </View>
          <TouchableOpacity
            style={{
              marginRight: 80,
              marginLeft: 80,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: "#41b6e6",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
            }}
            underlayColor="#fff"
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 20,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  export default OrderPage;