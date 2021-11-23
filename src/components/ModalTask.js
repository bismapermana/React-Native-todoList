import React, { useState } from "react";
import { Modal, Button, FormControl, Input } from "native-base";
import axios from "axios";

const ModalTask = ({ showModal, setShowModal, getData }) => {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleOnChange = (e, input) => {
    setForm({
      ...form,
      [input]: e,
    });
  };

  const postData = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      await axios.post(
        "https://619a108f9022ea0017a7b010.mockapi.io/todos/",
        form,
        config
      );
      getData();
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Add Activity</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Title</FormControl.Label>
              <Input onChangeText={(e) => handleOnChange(e, "title")} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Description</FormControl.Label>
              <Input onChangeText={(e) => handleOnChange(e, "description")} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={postData}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalTask;
