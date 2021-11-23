import React, { useState, useEffect } from "react";
import { Box, VStack, HStack, Button } from "native-base";
import { Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";

const CardDoneTask = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://619a108f9022ea0017a7b010.mockapi.io/todos"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(
        "https://619a108f9022ea0017a7b010.mockapi.io/todos/" + id
      );
      getData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    if (item.isDone == true) {
      return (
        <Box style={styles.containerCard} key={item.id} borderRadius="md">
          <HStack height="100" width="100%">
            <Box borderRadius="10" bg="white" width="25%" shadow="7">
              <Button
                borderBottomRadius="10"
                borderTopRadius="10"
                bg="red.500"
                height="100%"
                onPress={() => deleteData(item.id)}
              >
                <Text style={styles.textButton}>Delete</Text>
              </Button>
            </Box>
            <Box
              bg="white"
              marginLeft="3%"
              width="72%"
              borderRadius="10"
              padding="5"
              shadow="3"
            >
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.textTitle}
              >
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </Box>
          </HStack>
        </Box>
      );
    }
  };

  return (
    <Box>
      <Text style={styles.text}>Completed</Text>
      <VStack position="relative">
        <Box style={{ height: "100%" }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            refreshing={isLoading}
            onRefresh={getData}
          />
        </Box>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    height: 100,
    margin: 15,
    borderRadius: 20,
  },

  text: {
    textAlign: "right",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 20,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
  textDone: {
    color: "white",
    fontWeight: "bold",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  textInfomation: {
    fontSize: 13,
    fontWeight: "bold",
    padding: 5,
  },
});

export default CardDoneTask;
