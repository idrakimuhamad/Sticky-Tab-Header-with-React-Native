import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackParamList, RootTabParamList } from "../types";

type TabTwoScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, "TabTwo">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function TabTwoScreen({ navigation }: TabTwoScreenProps) {
  function handleGoExample() {
    navigation.navigate("MultiSticky");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Pressable onPress={handleGoExample}>
        <Text>Multi sticky header example</Text>
      </Pressable>
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
