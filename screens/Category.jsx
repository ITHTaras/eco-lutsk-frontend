import { Text, View } from "react-native";

function Category({ route, navigation }) {
  const { name, description } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default Category;
