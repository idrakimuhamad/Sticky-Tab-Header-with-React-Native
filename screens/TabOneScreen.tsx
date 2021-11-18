import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { Animated, Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootTabScreenProps } from "../types";

const DATA = require("../constants/data.json");

const DATA_COLLECTIBLE = [
  {
    name: "Pancake Bunnies",
    image:
      "https://lh3.googleusercontent.com/4iiKhaOtQM689vfW_Nva-sL8l4N1NwRXXhy0cEJgNmIwd7H2yU56-zGjy7IhRC2k70uw3UUwrUUmsRgYGntHQ6lSwKH3jYMmWS93lg=w600",
  },
];

const walletsAmount = DATA.map(() => {
  const walletAmount = Math.floor(Math.random() * 100);

  return walletAmount;
});

const Item = ({
  tab,
  item,
  index,
}: {
  tab: number;
  item: any;
  index: number;
}) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 12,
        alignItems: "center",
        paddingVertical: 16,
        borderBottomColor: "rgba(0,0,0, .05)",
        borderBottomWidth: 1,
        backgroundColor: Colors[colorScheme].background,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: tab === 0 ? item.image_url : item.image,
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: tab === 0 ? 0 : 6,
          }}
        />
        <View
          style={{
            paddingHorizontal: 12,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          {tab === 0 && (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 18,
                  marginRight: 12,
                  color: Colors[colorScheme].prices,
                }}
              >
                {`${parseFloat(item.latest_price.amount.amount).toFixed(2)} ${
                  item.latest_price.amount.currency
                }`}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: item.percent_change < 0 ? "red" : "green",
                }}
              >
                {`${(item.percent_change * 100).toFixed(2)}%`}
              </Text>
            </View>
          )}
        </View>
      </View>
      {tab === 0 && (
        <View>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: "600",
              textAlign: "right",
            }}
          >
            {`${walletsAmount[index].toFixed(2)} ${item.base}`}
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "right",
              color: Colors[colorScheme].prices,
            }}
          >
            {`${(
              walletsAmount[index] * parseFloat(item.latest_price.amount.amount)
            ).toFixed(2)} ${item.currency}`}
          </Text>
        </View>
      )}
    </View>
  );
};

const HeaderAction = ({
  name,
  title,
}: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  title: string;
}) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        paddingHorizontal: 12,
        backgroundColor: "transparent",
      }}
    >
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            padding: 6,
            backgroundColor: "rgba(255,255,255, .1)",
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 8,
          }}
        >
          <FontAwesome
            size={24}
            color={Colors[colorScheme].white}
            name={name}
          />
        </View>
        <Text
          style={{
            color: Colors[colorScheme].white,
            fontSize: 12,
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const Header = ({
  navigation,
  scroll,
}: {
  navigation: RootTabScreenProps<"TabOne">["navigation"];
  scroll: any;
}) => {
  const colorScheme = useColorScheme();

  const amountOpacity = React.useCallback(() => {
    return scroll.interpolate({
      inputRange: [0, 10, 30],
      outputRange: [1, 0.5, 0],
      extrapolate: "clamp",
    });
  }, [scroll]);

  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme].mainHeaderBg,
        paddingBottom: 32,
      }}
    >
      <Animated.View
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: amountOpacity(),
          marginBottom: 24,
        }}
      >
        <Text
          style={{
            color: Colors[colorScheme].white,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          MYR 4225
        </Text>
        <Text
          style={{
            color: Colors[colorScheme].white,
            fontSize: 16,
          }}
        >
          Satoshi Nakamura
        </Text>
      </Animated.View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors[colorScheme].mainHeaderBg,
        }}
      >
        <HeaderAction name="angle-double-up" title="Send" />
        <HeaderAction name="angle-double-down" title="Received" />
        <HeaderAction name="tag" title="Buy" />
        <HeaderAction name="exchange" title="Trade" />
      </View>
    </View>
  );
};

const StickyHeaders = ({
  selectedTab,
  handleTabPress,
}: {
  selectedTab: number;
  handleTabPress: (index: number) => () => void;
}) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme].mainHeaderBg,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Colors[colorScheme].stickyHeaderBg,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          overflow: "hidden",
        }}
      >
        <TabHeader
          index={0}
          selected={selectedTab === 0}
          onPress={handleTabPress(0)}
          title="Tokens"
        />
        <TabHeader
          index={1}
          selected={selectedTab === 1}
          onPress={handleTabPress(1)}
          title="Collectibles"
        />
      </View>
    </View>
  );
};

const TabHeader = ({
  index,
  title,
  selected = false,
  onPress,
}: {
  index: number;
  title: string;
  selected?: boolean;
  onPress: (index: number) => void;
}) => {
  const colorScheme = useColorScheme();
  const handlePress = React.useCallback(() => {
    onPress(index);
  }, []);
  return (
    <Pressable
      onPress={handlePress}
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 16,
        borderBottomColor: selected ? Colors[colorScheme].tint : "transparent",
        borderBottomWidth: 2,
      }}
    >
      <Text
        style={{
          color: selected
            ? Colors[colorScheme].tint
            : Colors[colorScheme].tabIconDefault,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const colorScheme = useColorScheme();
  const [tab, setTab] = React.useState(0);
  const [data, setData] = React.useState(DATA);
  const scrollY = new Animated.Value(0);

  const headerTitle = React.useCallback(() => {
    return scrollY.interpolate({
      inputRange: [0, 50, 70],
      outputRange: [0, 0.5, 1],
      extrapolate: "clamp",
    });
  }, [scrollY]);

  const handleTabPress = React.useCallback(
    (index: number) => () => {
      setTab(index);
      setData(index === 0 ? DATA : DATA_COLLECTIBLE);
    },
    []
  );

  React.useEffect(() => {
    navigation.setOptions({
      title: "MYR 4225",
    });
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        // @ts-ignore
        opacity: headerTitle(),
      },
    });
  }, [headerTitle]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: Colors[colorScheme].mainHeaderBg,
        },
      ]}
    >
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        stickyHeaderIndices={[1]}
        scrollEventThrottle={20}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Header navigation={navigation} scroll={scrollY} />
        <StickyHeaders selectedTab={tab} handleTabPress={handleTabPress} />
        <View
          style={{
            minHeight: "100%",
            backgroundColor: Colors[colorScheme].background,
          }}
        >
          {data.map((item: any, index: number) => (
            <Item
              key={`${item.name}-${index}`}
              tab={tab}
              item={item}
              index={index}
            />
          ))}
        </View>
      </Animated.ScrollView>
      {/* <Animated.SectionList
        data={tab === 0 ? DATA : DATA_COLLECTIBLE}
        
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header navigation={navigation} scroll={scrollY} />
        }
        renderItem={({ item, index }) => (
          <Item tab={tab} item={item} index={index} />
        )}
        renderSectionItem={({ item, index }) => (
          <StickyHeaders selectedTab={tab} handleTabPress={handleTabPress} />
        )}

      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
});
