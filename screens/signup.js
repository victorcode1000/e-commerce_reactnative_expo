import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
} from "react-native";
import MyImage from "../components/myimage";
import FormTextInput from "../components/formtextinput";

import Heading from "../components/heading";
import FormText from "../components/formtext";
import FormButton from "../components/formbutton";

export default function SignUpscreen({ navigation }) {
  function navigateToLogin() {
    return navigation.navigate("Login");
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          width: "100%",
        }}
      >
        <Heading title="Sign Up" left={true} search={false} />
      </View>

      <View style={styles.inputcontainer}>
        <FormTextInput
          label="Name"
          placeholder=""
          antDesignicon="check"
          antDesigncolor="green"
        />
        <FormTextInput label="Email" placeholder="" />
        <FormTextInput placeholder="Password" />
      </View>
      <TouchableHighlight
        style={{ width: "100%" }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <View
          style={{
            width: "100%",
          }}
        >
          <FormText
            text="Already have an account?"
            navigateTo={navigateToLogin}
          />
        </View>
      </TouchableHighlight>
      <View style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            marginTop: -60,

            position: "absolute",
            bottom: 40,
          }}
        >
          <FormButton title="Sign Up" color="#ec0000" />
        </View>
      </View>

      <View
        style={{
          marginBottom: -70,
        }}
      >
        <Text>Or Sign up with social account</Text>
      </View>
      <View style={styles.imageContainer}>
        <MyImage
          imageSource={require("C:/Users/Mr Koby/Documents/programming/NATIVEJOB/assets/social_icons/facebook.png")}
        />
        <MyImage
          imageSource={require("C:/Users/Mr Koby/Documents/programming/NATIVEJOB/assets/social_icons/google_icon.png")}
        />
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 800,

    padding: 5,
    paddingTop: 50,
  },
  left: {
    alignSelf: "flex-start",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 210,
  },
  inputcontainer: {
    width: "100%",
  },
  signup: {
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    marginTop: -30,
  },
});
