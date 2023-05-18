import { Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Heading(props) {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalcontainer}>
        {props.left === true ? (
          <AntDesign name="left" size={20} color="black" style={styles.left} />
        ) : (
          <Text></Text>
        )}
        <Text style={styles.text}>{props.text}</Text>
        {props.search == true ? (
          <AntDesign name="search1" size={22} color="black" />
        ) : (
          <Text></Text>
        )}
      </View>
      <Text style={styles.formHeading}>{props.title}</Text>
    </View>
  );
}
styles = StyleSheet.create({
  formHeading: {
    fontSize: 30,
    fontWeight: 700,
    alignSelf: "flex-start",
  },
  horizontalcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    width: "100%",
  },
  text: {
    fontWeight: 500,
    fontSize: 25,
  },
});
export default Heading;
