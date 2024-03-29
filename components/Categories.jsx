import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

function Categories(props) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  // Redux
  const { isLoading, categories, navigation } = props;

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (fontsLoaded && !isLoading) {
    return (
      <View>
        <View style={styles.container}>
          {categories.map((category) => {
            return (
              <TouchableOpacity
                key={category.id}
                style={styles.category}
                onPress={() => {
                  navigation.navigate("Category", {
                    name: category.name,
                    description: category.description,
                  });
                }}
              >
                <View
                  style={{
                    ...styles.categoryIcon,
                    backgroundColor:
                      colors[
                        category.id > colors.length
                          ? category.id - colors.length - 1
                          : category.id - 1
                      ],
                  }}
                >
                  {icons[category.id - 1]}
                </View>
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            );
          })}
          {/*  */}
        </View>
      </View>
    );
  }
}

const icons = [
  <MaterialIcons name="file-document-multiple" color="#fff" size={40} />,
  <MaterialIcons name="glass-fragile" color="#fff" size={40} />,
  <MaterialIcons name="food-apple" color="#fff" size={40} />,
  <MaterialIcons name="bottle-soda" color="#fff" size={40} />,
  <Ionicons name="phone-portrait-outline" color="#fff" size={40} />,
  <MaterialIcons name="screw-machine-round-top" color="#fff" size={40} />,
];

const colors = [
  "#2596be",
  "#2558be",
  "#f89c0c",
  "#38c638",
  "#d4401f",
  "#b9b5b5",
];

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 100,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  category: {
    display: "flex",
    alignItems: "center",
    width: "33%",
    marginBottom: 20,
  },
  categoryIcon: {
    padding: 14,
    borderRadius: 30,
  },
  categoryText: {
    fontFamily: "Roboto_500Medium",
    color: "#8b9098",
  },
});

export default Categories;
