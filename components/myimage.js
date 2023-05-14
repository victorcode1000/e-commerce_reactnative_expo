import { Image, StyleSheet, Text } from "react-native";

function MyImage(props) {
  return (
    <>
      <Image source={props.imageSource} style={styles.image} />
    </>
  );
}
export default MyImage;

const styles = StyleSheet.create({
  image: {
    borderColor: "blue",
    height: 200,
    borderWidth: 3,
    width: 200,
  },
});
