import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import SwitchSelector from "react-native-switch-selector";


const orderItemsAnimation = {
  duration: 300,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 100,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Data = [
  {
    id: 1,
    name: "Krabby Patty",
    price: 1.25,
  },
  {
    id: 2,
    name: "Coral Bit",
    price: 1.00,
  },
  {
    id: 4,
    name: "Double Krabby Patty",
    price: 2.00,
  },
  {
    id: 3,
    name: "Salty Sea Dog",
    price: 1.25,
  },
  {
    id: 4,
    name: "Kelp Shake",
    price: 2.00,
  },
];

function OrderPage() {
    const options = [
      { label: "Delivery", value: "USA" },
      { label: "Pick Up", value: "831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean"},
    ];
    const [titleText, setTitleText] = useState();  
    const [modalVisible, setModalVisible] = useState(false);
    const [total, setTotal] = useState(7.50);  
    const [data, setData] = React.useState(Data);
    const removeItem = (id) => {
      let arr = data.filter(function (item) {
        return item.id !== id;
      });
      setData(arr);
      LayoutAnimation.configureNext(orderItemsAnimation);
    };

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
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
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
                  right={() => (
                    <MaterialCommunityIcons
                      name="close"
                      size={25}
                      style={{ marginRight: 40 }}
                      onPress={() => removeItem(item.id)}
                    />
                  )}
                />
              );
            }}
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
                  setTitleText(` ${value}`)
                }
              />
              </View>
              <View style={{width:190}}>
              <Text style={{textAlign:'center'}}>
        {titleText}
      </Text></View>
              <Text style={{fontSize:30, marginVertical: 15}}>Total: ${total}</Text>
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
            onPress={() => setModalVisible(true)}
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

          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <MaterialCommunityIcons
                    name="close"
                    size={25}
                    style={{verticalAlign:'top', alignSelf: 'flex-end', position: 'absolute', paddingRight:20, paddingTop:20}}
                    onPress={() => {
                      setModalVisible(!modalVisible)
                    }}
                  />
            <Text style={styles.modalText}>Your order has been placed!</Text>
            <Image
              source={require("../assets/images/modalGif.gif")}
              style={{ width: 150, height: 150 }}
            />
          </View>
        </View>
      </Modal>
    </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 100,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 15,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      textAlign: 'center',
      fontSize: 18
    },
  });
  

  export default OrderPage;