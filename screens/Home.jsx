import { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import EvilIcons from "react-native-vector-icons/EvilIcons";

import Categories from "../components/Categories";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../features/categories/categorySlice";

function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  // Redux
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((store) => store.category);

  // useEffect
  useEffect(() => {
    dispatch(getCategories());
    //console.log(categories);
  }, []);

  // Day time
  const hours = new Date().getHours();

  let daytime = "";
  if (hours >= 6 && hours < 12) daytime = "Доброго ранку";
  if (hours >= 12 && hours < 17) daytime = "Доброго здоров'я";
  if (hours >= 17 && hours < 22) daytime = "Добрий вечір";
  if (hours >= 22 && hours < 6) daytime = "Добраніч";
  //console.log(categories);

  if (isLoading) {
    return (
      <View>
        <Text>I'm loading NIgga!</Text>
      </View>
    );
  }

  if (fontsLoaded && !isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.hello}>{daytime},</Text>
          <Text style={styles.name}>Taras</Text>
        </View>
        <Searchbar
          placeholder="Пошук"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
          inputStyle={{ color: "#7d8189" }}
          icon={() => (
            <EvilIcons
              name="search"
              size={45}
              color="#A1A7B2"
              style={{ minWidth: 50 }}
            />
          )}
        />
        {/*  Categories  */}
        <Categories
          categories={categories}
          isLoading={isLoading}
          navigation={navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: Dimensions.get("window").height,
    backgroundColor: "#fdfdfd",
  },
  heading: {
    marginBottom: 25,
  },
  hello: {
    color: "#8b9098",
    fontSize: 14,
  },
  name: { fontFamily: "Roboto_500Medium", fontSize: 23 },
  search: {
    flexDirection: "row-reverse",
    backgroundColor: "#EDEEF0",
    borderRadius: 10,
    shadowColor: "#fdfdfd",
    paddingVertical: 10,
  },
});

export default Home;
