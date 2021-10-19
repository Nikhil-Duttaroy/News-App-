import React, { useContext, useState } from "react";
import { useWindowDimensions, StatusBar, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Context,{ NewsContext } from "../API/Context";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";
// import Context, { NewsContext } from "./API/Context";


export default function InshortTabs() {
  const layout = useWindowDimensions();
const { darkTheme, index, setIndex } = useContext(NewsContext);
  // const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});