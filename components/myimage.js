import { Image, StyleSheet, View } from "react-native";

function MyImage(props) {
  return (
    <View style={styles.container}>
      <Image source={props.imageSource} style={styles.image} />
    </View>
  );
}
export default MyImage;

const styles = StyleSheet.create({
  image: {
    height: 25,

    width: 25,
  },
  container: {
    borderwidth: 1,
    height: 64,
    width: 92,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
