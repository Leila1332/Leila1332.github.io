import { useState } from 'react';

import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  const [textColorLamp, setTextColorLamp] = useState("red");
  const [textColorHeater, setTextColorHeater] = useState("red");
  const [textColorTV, setTextColorTV] = useState("red");

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            margin: 5,
            width: 50,
            height: 50,
          }}
          source={require("./assets/house.png")}
        />

        <Text style={{ color: "blue", fontWeight: "bold" }}>SmartHome</Text>
      </View>
      <Text style={{ fontWeight: "bold", color: "black" }}>
        {}
        {""}Rooms
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            flexDirection: "column",
            width: 56,
            height: 56,
            backgroundColor: "lightblue",
            margin: 5,
          }}
          source={require("./assets/living-room.png")}
        />

        <Image
          style={{
            flexDirection: "column",
            width: 56,
            height: 56,
            backgroundColor: "lightblue",
            margin: 5,
          }}
          source={require("./assets/bed.png")}
        />

        <Image
          style={{
            flexDirection: "column",
            width: 56,
            height: 56,
            backgroundColor: "lightblue",
            margin: 5,
          }}
          source={require("./assets/kitchen.png")}
        />
      </View>
      <Text style={{ fontWeight: "bold" }}>Devices</Text>

      <View style={{ justifyContent: "flex-end" }}>
        <Text
          style={{
            backgroundColor: "#ffeb7a",
            width: 190,
            height: 80,
            margin: 5,
          }}
        >
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: textColorLamp,
              margin: 5,
            }}
          ></View>
          Living Room Lamp
          <View style={{ flexDirection: "column" }}>
            <Button
              title="On"
              onPress={() => {
                setTextColorLamp("green");
              }}
            ></Button>

            <Button
              title="Off"
              onPress={() => {
                setTextColorLamp("red");
              }}
            >
              >
            </Button>
          </View>
        </Text>
      </View>

      <View style={{ justifyContent: "flex-end", alignContent: "flex-end" }}>
        <Text
          style={{
            backgroundColor: "#ffeb7a",
            width: 190,
            height: 80,
            margin: 5,
            alignItems: "flex-start",

            // justifyContent: "flex-end",
          }}
        >
          <View
            style={{ height: 10, width: 10, backgroundColor: textColorHeater }}
          ></View>
          Heater{"                     "}
          <View style={{ flexDirection: "column" }}>
            <Button
              title="On"
              onPress={() => {
                setTextColorHeater("green");
              }}
            ></Button>
            <Button
              title="Off"
              onPress={() => {
                setTextColorHeater("red");
              }}
            ></Button>
          </View>
        </Text>
      </View>

      <View>
        <Text
          style={{
            backgroundColor: "#ffeb7a",
            width: 190,
            height: 80,
            margin: 5,
          }}
        >
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: textColorTV,
              justifyContent: "flex-start",
            }}
          ></View>
          TV{"                           "}
          <View style={{ flexDirection: "column" }}>
            <Button
              title="On"
              onPress={() => {
                setTextColorTV("green");
              }}
            ></Button>
            <Button
              title="Off"
              onPress={() => {
                setTextColorTV("red");
              }}
            ></Button>
          </View>
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>Total Devices On: 1</Text>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "withe",
    margin: 40,
    alignItems: "flex-start",
    // justifyContent: "center",
  },
});
