import { StatusBar } from "expo-status-bar";
import {
  Button,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  let actionLeila = () => {
    alert(" Hejsan Leila!");
  };
  let actionOnLoadMore = () => {
    Alert.alert("Alert Title", "Alert message", [
      {
        text: "OK",
        onPress: handleOkPress,
      },
    ]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              height: 100,
              width: 400,
              justifyContent: "space-between",
              backgroundColor: "purple",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Hello Guest!!{" "}
            </Text>
            <Image
              style={{
                height: 100,
                width: 100,
              }}
              source={require("./assets/profile.png")}
            ></Image>
          </View>
          <Button title="submit" onPress={actionLeila}></Button>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Today's Highlights
          </Text>
          <View style={{ height: 600, width: 350, left: 18, top: 50 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                backgroundColor: "oldlace",
                padding: 20,
              }}
            >
              <text style={{ fontWeight: "bold", fontSize: 20 }}>
                First Article
              </text>
            </Text>

            <Text style={{ backgroundColor: "oldlace", fontWeight: "bold" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur libero purus. Proin maximus justo sed lacus ultrices
              interdum. Sed accumsan velit nisi, a interdum velit maximus nec.
              Sed ut egestas odio, vitae commodo odio. Nam eget dignissim arcu.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur libero purus. Proin maximus justo sed lacus ultrices
              interdum. Sed accumsan velit nisi, a interdum velit maximus nec.
              Sed ut egestas odio, vitae commodo odio. Nam eget dignissim arcu.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
            </Text>
          </View>
          <View style={{ height: 600, width: 350, left: 18, top: 50 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                backgroundColor: "oldlace",
                padding: 20,
              }}
            >
              <text style={{ fontWeight: "bold", fontSize: 20 }}>
                Another Article
              </text>
            </Text>

            <Text style={{ backgroundColor: "oldlace", fontWeight: "bold" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur libero purus. Proin maximus justo sed lacus ultrices
              interdum. Sed accumsan velit nisi, a interdum velit maximus nec.
              Sed ut egestas odio, vitae commodo odio. Nam eget dignissim arcu.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur libero purus. Proin maximus justo sed lacus ultrices
              interdum. Sed accumsan velit nisi, a interdum velit maximus nec.
              Sed ut egestas odio, vitae commodo odio. Nam eget dignissim arcu.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
            </Text>
          </View>
          <View style={{ height: 600, width: 350, left: 18, top: 50 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                backgroundColor: "oldlace",
                padding: 20,
              }}
            >
              <text style={{ fontWeight: "bold", fontSize: 20 }}>
                Import One
              </text>
            </Text>

            <Text style={{ backgroundColor: "oldlace", fontWeight: "bold" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur libero purus. Proin maximus justo sed lacus ultrices
              interdum. Sed accumsan velit nisi, a interdum velit maximus nec.
              Sed ut egestas odio, vitae commodo odio. Nam eget dignissim arcu.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur libero purus. Proin maximus justo sed lacus ultrices
              interdum. Sed accumsan velit nisi, a interdum velit maximus nec.
              Sed ut egestas odio, vitae commodo odio. Nam eget dignissim arcu.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
              Praesent scelerisque augue eu varius iaculis. Donec tempor
              tincidunt vulputate. Phasellus volutpat sapien at mi dapibus, sit
              amet facilisis diam ultricies. Aenean consequat arcu facilisis
              arcu dapibus consequat. Quisque scelerisque varius sollicitudin.
            </Text>
          </View>

          <Button title="Load more" onPress={actionOnLoadMore}></Button>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-center",
    // justifyContent: "center",
  },
});
