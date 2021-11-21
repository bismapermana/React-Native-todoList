import React, { useState, useEffect } from "react";
import { Box, VStack, HStack, Icon, Fab, Button } from "native-base";
import { StyleSheet, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import ModalTask from "./ModalTask";

const CardTask = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

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
      setIsLoading(false);
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
    return (
      <Box style={styles.containerCard} key={item.id} borderRadius="md">
        <HStack height="100" width="100%">
          <Box borderRadius="10" bg="white" width="25%" shadow="7">
            <Button
              borderTopRadius="10"
              borderBottomRadius="0"
              height="50%"
              onPress={() => deleteData(item.id)}
            >
              <Text style={styles.textDone}>Done</Text>
            </Button>
            <Button
              borderBottomRadius="10"
              borderTopRadius="0"
              borderTopWidth="2"
              borderTopColor="white"
              bg="orange.400"
              height="50%"
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
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </Box>
        </HStack>
      </Box>
    );
  };

  return (
    <Box>
      <Text style={styles.text}>Your Activity</Text>
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
        <Fab
          onPress={handleShow}
          icon={
            <Icon
              color="white"
              as={<Ionicons name="create-outline" />}
              size="md"
            />
          }
          bottom="20"
          position="absolute"
          size="md"
        />
      </VStack>
      <ModalTask
        showModal={showModal}
        setShowModal={setShowModal}
        getData={getData}
      />
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

export default CardTask;
