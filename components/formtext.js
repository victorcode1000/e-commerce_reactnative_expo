import { Text, View, StyleSheet } from "react-native/";
import { AntDesign } from "@expo/vector-icons";

function FormText(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <AntDesign name="arrowright" size={20} color="red" style={styles.icon} />
    </View>
  );
}

export default FormText;
var styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  icon: {
    marginLeft: 5,
  },
  text: {
    color: "#222222",
  },
});
