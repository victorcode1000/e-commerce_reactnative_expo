import { Text, StyleSheet, KeyboardAvoidingView, View } from "react-native/";
import Heading from "../components/heading";
import FormTextInput from "../components/formtextinput";
import FormText from "../components/formtext";
import FormButton from "../components/formbutton";
import MyImage from "../components/myimage";

export default function LoginScreen(navigation) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "55%",
          justifyContent: "space-between",
        }}
      >
        <Heading title="Login" left={true} />
        <View
          style={{
            width: "100%",
            height: 70,
          }}
        ></View>
        <View
          style={{
            width: "100%",
            height: 150,
          }}
        >
          <FormTextInput label="Email" />
          <FormTextInput label="Password" />
        </View>

        <FormText text="Forgot Your Password?" navigateTo={() => {}} />
        <View
          style={{
            height: 30,
          }}
        ></View>
        <FormButton title="LOGIN" />
      </View>

      <View
        style={{
          width: "100%",
          height: "25%",
        }}
      ></View>
      <View
        style={{
          width: "100%",
          height: "24%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Or Login With Social Account</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MyImage
            imageSource={require("C:/Users/Mr Koby/Documents/programming/NATIVEJOB/assets/social_icons/facebook.png")}
          />
          <MyImage
            imageSource={require("C:/Users/Mr Koby/Documents/programming/NATIVEJOB/assets/social_icons/google_icon.png")}
          />
        </View>
      </View>
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
});
