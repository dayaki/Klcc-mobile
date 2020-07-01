import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  return isLoaded ? (
    <WebView
      source={{ uri: "https://klcconline.com/" }}
      style={{ paddingTop: 20 }}
      onLoad={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.log("======URL", nativeEvent);
        setIsLoaded(true);
      }}
    />
  ) : (
    <View style={styles.imageWrapper}>
      <Image
        source={require("./assets/splash.png")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
