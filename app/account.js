import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useState,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar, List, Searchbar } from "react-native-paper";

function ProfilePage() {
  let userName = "Name";
  const [name, newName] = React.useState("");
  const [phone, newPhone] = React.useState("");
  const [email, newEmail] = React.useState("");
  const [address, newAddress] = React.useState("");
  const [holderName, newHolderName] = React.useState("");
  const [cardNum, newCardNum] = React.useState("");
  const [cvv, newCvv] = React.useState("");
  const [expire, newExpire] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState("blue");

  let x = 0.0;

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
          <Text style={{ fontSize: 30, margin: 30 }}>Hi, {userName}!</Text>
          <Text style={{ fontSize: 20, margin: 10 }}>Good Noodle Rewards</Text>
          <View style={{ flexDirection: "row" }}>
            <ProgressBar progress={count} color={color} width="80%" />
            <MaterialCommunityIcons
              name="star"
              color="gold"
              size="30"
              style={{ marginTop: -15 }}
            />
          </View>
          <Button
            color="#41b6e6"
            onPress={() => {
              setCount(count + 0.1), setColor("#41b6e6");
            }}
            title="Point"
          />
          <Button
            color="#41b6e6"
            onPress={() => {
              if (count > 0.9) {
                setCount(0), setColor("gold");
              } else if (count < 0.9) {
                setCount(count);
              }
            }}
            title="Reedem"
          />
        </View>
        <List.Accordion
          theme={{
            colors: {
              primary: "#41b6e6",
            },
          }}
          title="Previous Orders"
          left={(props) => <List.Icon {...props} icon="cart" />}
        >
          <List.Item title="First Order" />
          <List.Item title="Second Order " />
        </List.Accordion>
        <List.Accordion
          theme={{
            colors: {
              primary: "#41b6e6",
            },
          }}
          title="Personal Information"
          left={(props) => <List.Icon {...props} icon="fish" />}
        >
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newName}
            placeholder="Name"
            value={name}
          />
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newPhone}
            placeholder="Phone"
            value={phone}
          />
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newEmail}
            placeholder="Email"
            value={email}
          />
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newAddress}
            placeholder="Address"
            value={address}
          />
        </List.Accordion>
        <List.Accordion
          theme={{
            colors: {
              primary: "#41b6e6",
            },
          }}
          title="Payment"
          left={(props) => <List.Icon {...props} icon="credit-card" />}
        >
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newHolderName}
            placeholder="Card Holder Name"
            value={holderName}
          />
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newCardNum}
            placeholder="Card Number"
            value={cardNum}
          />
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newCvv}
            placeholder="CVV"
            value={cvv}
          />
          <TextInput
            style={{
              margin: 12,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "gray",
            }}
            onChangeText={newExpire}
            placeholder="Expiration Date"
            value={expire}
          />
        </List.Accordion>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: 40,
              marginLeft: 40,
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
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfilePage;
