import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackParamList, RootTabParamList } from "../types";

type TabThreeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, "TabThree">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function TabThreeScreen({ navigation }: TabThreeScreenProps) {
  function handleGoExample() {
    navigation.navigate("CollapsibleSticky");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        onPress={handleGoExample}
        title="Collapsible sticky header example"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
