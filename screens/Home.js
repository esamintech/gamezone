import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    { title: "Not So Final Fantasy", rating: 3, body: "lorem ipsum", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      {/* Reviews List */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.card}
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
