import React from "react";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>reviewDetails</Text>
      <Button title="Back to Home" onPress={pressHandler} />
    </View>
  );
}

export default ReviewDetails;
