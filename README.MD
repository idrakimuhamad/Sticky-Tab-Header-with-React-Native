# Sticky Tab Header with React Native

This repo is a simple example of a sticky tab header with React Native, based on app like TrustWallet and other app like Binance and others have this kind of visual presentation too, where the whole screen seems to be a scrollable area and when it reach certain point the header will stick to the top of the screen, right under the screen header.

The repo try to replicate this in React Native/Expo and by using all packages that it have by default without other 3rd party packages.

The first approach is by using the regular `ScrollView` component, which comes with a very useful prop now called `stickyHeaderIndices`. I make use of this to tell the scroll view to stick the element on this index to the top of the screen when the user scrolls to a certain point.

I also added a tad of opacity transition to the total amount and transition towards the header. This is achieved by using the `navigation`'s `setOption` and by setting the `headerTitleStyle`'s opacity value with an interpolation from the scroll position.

```js
const scrollY = new Animated.Value(0);

const headerTitle = React.useCallback(() => {
  return scrollY.interpolate({
    inputRange: [0, 50, 70],
    outputRange: [0, 0.5, 1],
    extrapolate: "clamp",
  });
}, [scrollY]);

navigation.setOptions({
  headerTitleStyle: {
    opacity: headerTitle(),
  },
});
```

The second approach uses the `SectionList` component, which is a very powerful component that can be used to display a list of data with a sticky header. Instead of using the value from the data as a header, I simply hardcoded the `renderSectionItem` function to return a the tab bar component. This way we always have a single section and all of the data will stick beneath it.

In a huge number of data case, I do think `SectionList` can be the better choice due to its derivation from `VirtualList`. However, if we do not have a lot of data and also the data didn't need to real time, scroll view should suffice.

Run on expo.

exp://exp.host/@idraki/DashboardStickyHeader
