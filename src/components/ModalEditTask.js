import React, { useState } from "react";
import { Modal, Button, FormControl, Input } from "native-base";
import axios from "axios";

const ModalEditTask = ({
  showModalEdit,
  setShowModalEdit,
  getData,
  todoData,
}) => {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleOnChange = (e, input) => {
    setForm({
      ...form,
      [input]: e,
    });
  };

  const editData = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.put(
        "https://619a108f9022ea0017a7b010.mockapi.io/todos/" + todoData.id,
        form,
        config
      );
      getData();
      setShowModalEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={showModalEdit}
      onClose={() => setShowModalEdit(false)}
      size="xl"
    >
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Edit Activity</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input
              placeholder={todoData.title}
              onChangeText={(e) => handleOnChange(e, "title")}
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Description</FormControl.Label>
            <Input
              placeholder={todoData.description}
              onChangeText={(e) => handleOnChange(e, "description")}
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModalEdit(false);
              }}
            >
              Cancel
            </Button>
            <Button onPress={editData}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalEditTask;
