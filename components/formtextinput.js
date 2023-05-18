import { TextInput, StyleSheet, Text, View } from "react-native/";

import { AntDesign } from "@expo/vector-icons";

function FormTextInput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput placeholder={props.placeholder} style={styles.formTextInput} />
      <AntDesign
        name={props.antDesignicon}
        size={24}
        color={props.antDesigncolor}
        style={styles.antDesignicon}
      />

      <Text style={styles.errorText}>{props.errorText}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  formTextInput: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
  },
  formTextInputWithBorder: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
    bordercolor: "red",
    borderWidth: 2,
    borderRadius: 3,
  },

  label: {
    position: "absolute",

    zIndex: 1,
    color: "#737373",
    top: 5,
    left: 10,
  },
  antDesignicon: {
    position: "absolute",
    right: 10,
    top: "33%",
  },
  errorText: {
    color: "red",
    fontSize: 10,
  },
});
export default FormTextInput;
