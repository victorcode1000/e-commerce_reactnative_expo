import { Text, StyleSheet, TouchableOpacity } from "react-native/";

function FormButton(props) {
  return (
    <TouchableOpacity
      title={props.title}
      color={props.color}
      style={styles.button}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#b30000",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  text: {
    color: "white",
  },
});

export default FormButton;
