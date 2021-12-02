import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import faker from "faker";
import * as React from "react";
import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootStackScreenProps } from "../types";

const HEIGHT = 58 * 2;

type ItemProp = {
  id: string;
  title: string;
  desc: string;
  color: string;
};

export const closestValue = (
  value: number,
  checkOne: number,
  checkTwo: number
) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

function generateData(size = 5): ItemProp[] {
  return Array.from({ length: size }).map(
    (_, i): ItemProp => ({
      id: faker.datatype.uuid(),
      title: faker.git.commitMessage(),
      desc: faker.lorem.sentence(),
      color: faker.commerce.color(),
    })
  );
}

function Item({ item, index }: { item: ItemProp; index: number }) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 10,
        alignItems: "center",
        marginBottom: 16,
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: item.color,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          paddingHorizontal: 12,
        }}
      >
        <Text lightColor={Colors.dark.white}>{item.title}</Text>
        <Text lightColor={Colors.dark.alphaWhite}>{item.desc}</Text>
      </View>
    </Pressable>
  );
}

function Header({
  height,
  headerLeft,
  opacity,
  translateY,
}: {
  headerLeft: () => React.ReactNode;
  height: number;
  opacity: Animated.AnimatedInterpolation;
  translateY: Animated.AnimatedInterpolation;
}) {
  const scheme = useColorScheme();
  const insets = useSafeAreaInsets();
  return (
    <>
      <Animated.View
        style={[
          {
            width: "100%",
            paddingHorizontal: 12,
            // backgroundColor: "yellow",
            backgroundColor: Colors[scheme].offDark,
            flexDirection: "row",
            alignItems: "center",
            paddingTop: insets.top,
            height: height / 2 + insets.top,
            zIndex: 1,
            position: "relative",
          },
          // {
          //   opacity,
          // },
        ]}
      >
        <View
          style={{
            flex: 1,
            // backgroundColor: "red",
            backgroundColor: Colors[scheme].offDark,
          }}
        >
          {headerLeft()}
        </View>
        <Text
          lightColor={Colors[scheme].white}
          style={{ fontSize: 16, fontWeight: "bold" }}
        >
          Issues
        </Text>
        <View style={{ flex: 1, backgroundColor: Colors[scheme].offDark }} />
      </Animated.View>
      <Animated.View
        style={[
          {
            position: "absolute",
            top: height / 2 + insets.top,
            width: "100%",
            paddingHorizontal: 16,
            // backgroundColor: "red",
            backgroundColor: Colors[scheme].offDark,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: height / 2,
            zIndex: 0,
          },
          {
            transform: [{ translateY }],
          },
        ]}
      >
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            backgroundColor: "rgba(0,0,0, .5)",
            borderRadius: 10,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Search for issues"
            placeholderTextColor={Colors[scheme].alphaWhite}
            style={{
              color: Colors[scheme].white,
            }}
          />
        </View>
      </Animated.View>
    </>
  );
}

export default function CollapsibleStickyScreen({
  navigation,
}: RootStackScreenProps<"CollapsibleSticky">) {
  const scheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const ref = React.useRef<FlatList>(null);
  const transYNum = React.useRef<number>(0);
  const scrollY = React.useRef(new Animated.Value(0));

  const translateY = scrollY.current.interpolate({
    inputRange: [0, HEIGHT],
    outputRange: [0, -(HEIGHT / 2)],
    extrapolate: "clamp",
  });
  const opacity = scrollY.current.interpolate({
    inputRange: [0, HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const data = generateData(25);

  translateY.addListener(({ value }) => {
    console.log("tY value", value);

    transYNum.current = value;
  });

  function handleSnap({ nativeEvent }: { nativeEvent: any }) {
    const offset = nativeEvent.contentOffset.y;

    console.log(offset);
    console.log(transYNum.current);

    if (!(transYNum.current === 0 || transYNum.current === -(HEIGHT / 2))) {
      if (ref.current) {
        ref.current.scrollToOffset({
          offset:
            closestValue(transYNum.current, -HEIGHT / 2, 0) === -HEIGHT / 2
              ? offset + HEIGHT / 2
              : offset - HEIGHT / 2,
        });
      }
    }
  }

  function goBack() {
    navigation.goBack();
  }

  function headerLeft() {
    return (
      <Pressable onPress={goBack}>
        <Ionicons
          name="ios-chevron-back-sharp"
          size={24}
          color={Colors[scheme].white}
        />
      </Pressable>
    );
  }

  function extractor(item: ItemProp, index: number) {
    return `list-item-${index}-${item.id}`;
  }

  // set the header
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerShown: false,
        // headerLeft: headerLeft,
      });
    }, [])
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors[scheme].offDark,
      }}
    >
      <StatusBar style="auto" />
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: Colors[scheme].offDark,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 1,
          },
          // {
          //   transform: [{ translateY }],
          // },
        ]}
      >
        <Header
          opacity={opacity}
          translateY={translateY}
          headerLeft={headerLeft}
          height={HEIGHT}
        />
      </Animated.View>

      <Animated.FlatList
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: HEIGHT }}
        ref={ref}
        data={data}
        keyExtractor={extractor}
        onScroll={handleScroll}
        onScrollEndDrag={handleSnap}
        renderItem={Item}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
