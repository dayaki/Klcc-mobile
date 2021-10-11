import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Home = () => (
  <WebView
    source={{ uri: "https://klcconline.com/" }}
    style={{ paddingTop: 20 }}
  />
);

const Groups = () => (
  <WebView
    source={{ uri: "https://klcconline.com/groups/" }}
    style={{ paddingTop: 20 }}
  />
);

const Discussions = () => (
  <WebView source={{ uri: "https://klcconline.com/forums/" }} />
);

const Devotional = () => (
  <WebView
    source={{
      uri: "https://klcconline.com/forums/forum/sparkling-gem-devotional/",
    }}
  />
);

const Courses = () => (
  <WebView source={{ uri: "https://klcconline.com/courses/" }} />
);

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Discussions" component={Discussions} />
      <Tab.Screen name="Devotional" component={Devotional} />
      <Tab.Screen name="Courses" component={Courses} />
    </Tab.Navigator>
  );
}
