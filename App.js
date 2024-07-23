import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { BlurView } from "expo-blur";
import { height } from "./src/utils/globalComp";
import * as SplashScreen from "expo-splash-screen";
import { Entypo } from "@expo/vector-icons";
import SwipeUnlock from "./src/component/slider";
import { useFonts } from "expo-font";
import { ImgSrc } from "./assets/images/ImgSrc";
import { colors, fontSizes, margin, padding } from "./src/utils/reusableComp";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [loaded, error] = useFonts({
    LibreBaskervilleBold: require("./assets/fonts/LibreBaskerville-Bold.ttf"),
    LibreBaskervilleItalic: require("./assets/fonts/LibreBaskerville-Italic.ttf"),
    LibreBaskervilleRegular: require("./assets/fonts/LibreBaskerville-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        translucent={false}
        style="light"
        backgroundColor={colors.background}
      />
      <ScrollView>
        <ImageBackground source={ImgSrc.bgImage} style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.prompt}>
              If you stood on Mars in normal clothes, your blood would start to
              boil and you would die.
            </Text>
            <Text style={styles.likePrompt}>Liked your prompt</Text>
            <View style={{ width: "90%" }}>
              <View style={styles.responseBox}>
                <Text style={styles.response}>Whoa that's so cool!</Text>
              </View>

              <View style={styles.triangleRight} />
            </View>
          </View>
          <View style={styles.profileCard}>
            <Text style={styles.name}>Kendall</Text>
            <TouchableOpacity style={styles.moreButton} onPress={handleOpen}>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>

            <Image
              source={{
                uri: ImgSrc.girl,
              }}
              style={styles.image}
            />
          </View>
        </ImageBackground>
      </ScrollView>

      <SwipeUnlock />
      {isOpen && (
        <BlurView
          intensity={100}
          blurReductionFactor={30}
          experimentalBlurMethod="dimezisBlurView"
          tint="systemUltraThinMaterialDark"
          style={styles.absolute}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.moreOptions}>
              <TouchableOpacity onPress={handleClose}>
                <Text style={styles.optionText}>Remove</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "#FFFFFF",
                  opacity: 0.3,
                  marginVertical: 10,
                }}
              />
              <TouchableOpacity onPress={handleClose}>
                <Text style={styles.optionText}>Report</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: padding.small,
    alignContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    marginBottom: margin.medium,
    width: "90%",
    paddingVertical: padding.large,
    paddingHorizontal: padding.medium,
  },
  prompt: {
    color: colors.textWhite,
    fontSize: fontSizes.medium,
    marginBottom: margin.small,
    fontFamily: "LibreBaskervilleBold",
  },
  likePrompt: {
    color: colors.textAccent,
    fontSize: fontSizes.small,
    marginBottom: margin.small,
    marginTop: margin.large,
    marginBottom: 15,
    fontFamily: "LibreBaskervilleBold",
  },
  responseBox: {
    backgroundColor: colors.responseBackground,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  response: {
    color: colors.responseText,
    fontSize: fontSizes.medium,
    fontFamily: "LibreBaskervilleBold",
  },
  profileCard: {
    backgroundColor: colors.profileCardBackground,
    borderRadius: 10,
    width: "90%",

    // overflow: "hidden",
  },
  image: {
    width: "100%",
    height: height * 0.4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },
  name: {
    color: colors.textWhite,
    fontSize: fontSizes.large,
    padding: 16,
    paddingLeft: 20,
    fontFamily: "LibreBaskervilleBold",
  },
  moreButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  moreButtonText: {
    color: colors.textWhite,
    fontSize: fontSizes.large,
  },
  moreOptions: {
    width: "60%",
    backgroundColor: colors.moreOptionsBackground,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 25,
    borderColor: colors.border,
    borderWidth: 1,
  },
  optionText: {
    color: colors.responseBackground,
    fontSize: fontSizes.medium,
    marginVertical: 10,
    fontFamily: "LibreBaskervilleBold",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  triangleRight: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 30,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: colors.responseBackground,
    transform: [{ rotate: "110deg" }],
    position: "absolute",
    bottom: -13,
    left: -10,
  },
});
