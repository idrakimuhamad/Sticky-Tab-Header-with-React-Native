import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/core";
import * as React from "react";
import {
  ColorSchemeName,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { DarkView, Text } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootStackScreenProps } from "../types";

function TabHeader() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        {
          paddingVertical: 16,
          paddingHorizontal: 20,
          backgroundColor: Colors[colorScheme].offDark,
        },
        styles.topRadius,
        styles.bottomRadius,
      ]}
    >
      <View
        style={{
          padding: 4,
          borderRadius: 4,
          backgroundColor: Colors[colorScheme].dark,
        }}
      >
        <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              backgroundColor: "rgba(255,255,255, .15)",
              borderRadius: 4,
            }}
          >
            <Pressable
              style={{
                padding: 4,
              }}
            >
              <Text
                style={{
                  color: Colors[colorScheme].white,
                }}
              >
                Auto
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <Pressable
              style={{
                padding: 4,
              }}
            >
              <Text
                style={{
                  color: Colors[colorScheme].white,
                }}
              >
                Manual
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

function Apy() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: Colors[colorScheme].white,
            fontSize: 14,
            marginRight: 4,
          }}
        >
          7D APY
        </Text>
        <Ionicons
          size={16}
          name="information-circle-outline"
          color={Colors.dark.prices}
        />
      </View>
      <Text
        style={{
          color: Colors[colorScheme].primary,
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        55.75%
      </Text>
    </View>
  );
}

function GridInfo({
  colorScheme,
}: {
  colorScheme: NonNullable<ColorSchemeName>;
}) {
  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme].dark,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
        borderRadius: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 8,
        }}
      >
        <Text style={{ color: Colors.dark.prices }}>Price Range[USDT]</Text>
        <Text style={{ color: Colors.dark.white }}>50610.30 - 62355.25</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 8,
        }}
      >
        <Text style={{ color: Colors.dark.prices }}>Quantity</Text>
        <Text style={{ color: Colors.dark.white }}>19</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 8,
        }}
      >
        <Text style={{ color: Colors.dark.prices }}>
          Profit Margin Pre Grid{" "}
          <Ionicons
            name="information-circle-outline"
            color={Colors.dark.prices}
            size={14}
          />
        </Text>
        <Text style={{ color: "#03AC8E" }}>0.76%</Text>
      </View>
    </View>
  );
}

function InvestInput({
  colorScheme,
}: {
  colorScheme: NonNullable<ColorSchemeName>;
}) {
  return (
    <View
      style={{
        paddingVertical: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: Colors.dark.alphaWhite,
          borderWidth: 1,
          borderRadius: 3,
        }}
      >
        <View
          style={{
            paddingVertical: 8,
            paddingLeft: 8,
            paddingRight: 12,
          }}
        >
          <Text
            style={{
              color: Colors.dark.alphaWhite,
            }}
          >
            Amount
          </Text>
        </View>
        <TextInput
          placeholder=">= 188.432151"
          placeholderTextColor="rgba(255,255,255, .2)"
          style={{
            color: Colors[colorScheme].white,
            flex: 1,
          }}
        />
        <View
          style={{
            paddingVertical: 8,
            paddingRight: 8,
            paddingLeft: 12,
          }}
        >
          <Text
            style={{
              color: Colors.dark.alphaWhite,
            }}
          >
            USDT
          </Text>
        </View>
      </View>
    </View>
  );
}

function TopPart() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        {
          backgroundColor: Colors[colorScheme].dark,
          paddingBottom: 8,
        },
      ]}
    >
      <View
        style={[
          {
            paddingHorizontal: 20,
            backgroundColor: Colors[colorScheme].offDark,
          },
          styles.bottomRadius,
        ]}
      >
        <Apy />

        <GridInfo colorScheme={colorScheme} />

        <InvestInput colorScheme={colorScheme} />

        <View
          style={{
            paddingVertical: 12,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors[colorScheme].primary,
              paddingVertical: 8,
              borderRadius: 4,
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "600" }}
              lightColor="white"
              darkColor="white"
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function BottomPart() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme].dark,
      }}
    >
      <View
        style={[
          {
            backgroundColor: Colors[colorScheme].offDark,
          },
          styles.topRadius,
        ]}
      >
        <BottomHeader colorScheme={colorScheme} />
        <TogglePairRow colorScheme={colorScheme} />
        <RunningPairRow colorScheme={colorScheme} />
      </View>
    </View>
  );
}

function RunningPairRow({
  colorScheme,
}: {
  colorScheme: NonNullable<ColorSchemeName>;
}) {
  return (
    <View
      style={{
        paddingVertical: 16,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 4,
            }}
          >
            <Text
              lightColor={Colors[colorScheme].white}
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              SHIB/USDT
            </Text>
            <View
              style={{
                paddingHorizontal: 4,
                paddingVertical: 2,
                backgroundColor: "#142945",
                borderRadius: 4,
                marginLeft: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#2683FE",
                }}
              >
                Grid Bot-4
              </Text>
            </View>
          </View>
          <Text
            lightColor={Colors[colorScheme].alphaWhite}
            style={{
              fontSize: 12,
            }}
          >
            Time 2021-11-17 08:18:46
          </Text>
        </View>
        <View>
          <Pressable
            style={{
              padding: 4,
              backgroundColor: Colors[colorScheme].dark,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "rgba(255,255,255, 0.15)",
            }}
          >
            <MaterialCommunityIcons
              name="share"
              color={Colors[colorScheme].alphaWhite}
              size={14}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function TogglePairRow({
  colorScheme,
}: {
  colorScheme: NonNullable<ColorSchemeName>;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255, 0.1)",
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: Colors[colorScheme].alphaWhite,
          borderRadius: 9,
          width: 30,
          height: 18,
          marginRight: 8,
        }}
      />
      <Text lightColor={Colors.dark.alphaWhite}>Show selected pair</Text>
    </View>
  );
}

function BottomHeader({
  colorScheme,
}: {
  colorScheme: NonNullable<ColorSchemeName>;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 12,
      }}
    >
      <Text
        style={{
          color: Colors[colorScheme].white,
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        Running
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialIcons
          name="list-alt"
          color={Colors.dark.alphaWhite}
          size={14}
        />
        <Text
          style={{
            color: Colors[colorScheme].alphaWhite,
            marginLeft: 4,
            fontSize: 12,
          }}
        >
          ALL
        </Text>
      </View>
    </View>
  );
}

export default function MultiStickyScreen({
  navigation,
}: RootStackScreenProps<"MultiSticky">) {
  const colorScheme = useColorScheme();

  function handleBack() {
    navigation.goBack();
  }

  function headerBackTitle() {
    return (
      <DarkView
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color={Colors.dark.prices} />
        </Pressable>
        <View
          style={{
            width: 1,
            height: 24,
            marginLeft: 12,
            backgroundColor: Colors.dark.prices,
          }}
        />
        <DarkView style={{ flexDirection: "row", alignItems: "center" }}>
          <DarkView style={{ marginHorizontal: 12 }}>
            <MaterialIcons
              size={24}
              name="menu-open"
              color={Colors.dark.prices}
            />
          </DarkView>
          <Text
            lightColor={Colors.dark.prices}
            style={{ fontWeight: "600", fontSize: 16, letterSpacing: 0.1 }}
          >
            SHIB/USDT
          </Text>
        </DarkView>
      </DarkView>
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerLeft: headerBackTitle,
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <DarkView
        style={{
          backgroundColor: Colors[colorScheme].dark,
          flexDirection: "row",
          alignItems: "flex-end",
          paddingTop: 24,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          lightColor="#D14C63"
          style={{
            fontSize: 24,
            lineHeight: 24,
            fontWeight: "600",
          }}
        >
          0.00004542
        </Text>
        <Text
          lightColor={Colors.dark.prices}
          style={{ fontSize: 12, lineHeight: 24, marginLeft: 8 }}
        >
          ≈ 0.0000454
        </Text>
      </DarkView>

      <TabHeader />

      <View
        style={{
          flex: 1,
          backgroundColor: Colors[colorScheme].offDark,
          borderRadius: 4,
        }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            backgroundColor: Colors[colorScheme].offDark,
            overflow: "hidden",
          }}
        >
          <TopPart />
          <BottomPart />
          <BottomPart />
          <BottomPart />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topRadius: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  bottomRadius: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.offDark,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
