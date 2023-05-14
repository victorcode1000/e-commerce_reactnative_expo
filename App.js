import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import MyImage from "./components/myimage";
import FormTextInput from "./components/formtextinput";
import { AntDesign } from "@expo/vector-icons";
import FormHeading from "./components/heading";
import FormText from "./components/formtext";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <AntDesign name="left" size={20} color="black" style={styles.left} />
      <FormHeading text="Sign Up" />
      <FormTextInput
        label="Name"
        placeholder=""
        antDesignicon="check"
        antDesigncolor="green"
      />
      <FormTextInput label="Email" placeholder="" />
      <FormTextInput placeholder="" />

      <FormText text="Already have an account?" />
      <Button title="sign up" color="red" />
      <Text>or sign up with social account</Text>
      <MyImage
        imageSource={require("C:/Users/Mr Koby/Documents/programming/NATIVEJOB/assets/social_icons/facebook.png")}
      />
      <MyImage
        imageSource={require("C:/Users/Mr Koby/Documents/programming/NATIVEJOB/assets/social_icons/google_icon.png")}
      />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "space-around",

    padding: 5,
    paddingTop: 30,
  },
  left: {
    alignSelf: "flex-start",
  },
});
