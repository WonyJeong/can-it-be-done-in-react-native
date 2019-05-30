import * as React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { Album } from "./Model";
import Header from "./Header";
import Content from "./Content";
import Cover from "./Cover";
import ShufflePlay from "./ShufflePlay";

const { Value } = Animated;

interface AlbumProps {
  album: Album;
}

export default ({ album }: AlbumProps) => {
  const y = new Value(0);
  const { artist } = album;
  return (
    <View style={styles.container}>
      <Header {...{ y, artist }} />
      <ShufflePlay {...{ y }} />
      <Cover {...{ y, album }} />
      <Content {...{ y, album }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
