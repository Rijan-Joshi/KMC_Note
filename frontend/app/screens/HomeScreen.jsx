import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { COLORS } from "../../constants/index"
import dummyData from "../dummyData/courseData";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <ScrollView>
        <Header />
        

       </ScrollView>
        <StatusBar color={COLORS.primaryBlackHex} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor:COLORS.primaryBlackHex
  }
})

export default HomeScreen;
