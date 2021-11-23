import React from "react";
import { Box } from "native-base";
import { StyleSheet, Text } from "react-native";
import CardDoneTask from "../components/CardDoneTask";

const DoneTodo = () => {
  return (
    <Box bg="#e5e5e5">
      <Box
        bg="orange.400"
        height="20%"
        width="100%"
        borderBottomRightRadius="40"
        marginBottom="5"
        borderBottomWidth="5"
        borderRightWidth="5"
        borderColor="white"
        shadow="9"
      >
        <Text style={styles.textTitle}>Todo App</Text>
        <Text style={styles.textDesc}>
          A Simple application to manage your daily actvities
        </Text>
      </Box>
      <Box height="80%">
        <CardDoneTask />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 70,
    color: "white",
    marginLeft: 15,
  },
  textDesc: {
    marginLeft: 15,
  },
});

export default DoneTodo;
