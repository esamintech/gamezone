import React from "react";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ReviewDetails;
