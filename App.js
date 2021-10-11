import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Linking,
  Platform,
  StatusBar,
} from "react-native";
import { WebView } from "react-native-webview";
// import { NavigationContainer } from "@react-navigation/native";
// import Navigation from "./src/Navigation";
// import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [hasRedirected, setHasRedirected] = useState(false);
  const webview = useRef();

  const onNavigationStateChange = (event) => {
    const { url } = event;
    // console.log("=======", url);
    if (url.includes("marketplace.zoom.us")) {
      webview.current.stopLoading();
      Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <WebView
        source={{ uri: "https://klcconline.com/" }}
        style={{ paddingTop: 0 }}
        onLoad={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          onNavigationStateChange(nativeEvent);
        }}
        ref={webview}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        domStorageEnabled
        onNavigationStateChange={
          !hasRedirected ? onNavigationStateChange : null
        }
        mixedContentMode="always"
        thirdPartyCookiesEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
