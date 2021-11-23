import { HStack } from "native-base";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, Touchable } from "react-native";

const ButtonsCalculator = ({ result, setResult, value, setValue }) => {
  const handleOnPressValue = (number) => {
    setValue(value + number);
  };

  const handleOnPressOperator = (operator) => {
    setValue(value + operator);
  };

  const calculation = () => {
    setResult(eval(value));
  };

  const clear = () => {
    setResult(0);
    setValue("");
  };

  const del = () => {
    setValue(value.substring(0, value.length - 1));
  };

  return (
    <>
      <HStack>
        <TouchableOpacity
          onPress={() => handleOnPressValue("1")}
          style={styles.button}
        >
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressValue("2")}
          style={styles.button}
        >
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clear} style={styles.buttonOperator}>
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={del} style={styles.buttonOperator}>
          <Text style={styles.text}>Del</Text>
        </TouchableOpacity>
      </HStack>
      <HStack>
        <TouchableOpacity
          onPress={() => handleOnPressValue("3")}
          style={styles.button}
        >
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressValue("4")}
          style={styles.button}
        >
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressOperator("/")}
          style={styles.buttonOperator}
        >
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressOperator("*")}
          style={styles.buttonOperator}
        >
          <Text style={styles.textOperator}>*</Text>
        </TouchableOpacity>
      </HStack>
      <HStack>
        <TouchableOpacity
          onPress={() => handleOnPressValue("5")}
          style={styles.button}
        >
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressValue("6")}
          style={styles.button}
        >
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressValue("%")}
          style={styles.buttonOperator}
        >
          <Text style={styles.textOperator}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={calculation} style={styles.buttonOperator}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </HStack>
      <HStack>
        <TouchableOpacity
          onPress={() => handleOnPressValue("7")}
          style={styles.button}
        >
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressValue("8")}
          style={styles.button}
        >
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressOperator("-")}
          style={styles.buttonOperator}
        >
          <Text style={styles.textOperator}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressOperator("+")}
          style={styles.buttonOperator}
        >
          <Text style={styles.textOperator}>+</Text>
        </TouchableOpacity>
      </HStack>
      <HStack>
        <TouchableOpacity
          onPress={() => handleOnPressValue("9")}
          style={styles.button}
        >
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOnPressValue("0")}
          style={styles.button}
        >
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF5757",
    padding: 5,
    width: 80,
    height: 75,
    margin: 6,
    borderRadius: 10,
  },
  buttonOperator: {
    backgroundColor: "#930707",
    padding: 5,
    width: 80,
    padding: 5,
    margin: 6,
    height: 75,
    borderRadius: 10,
  },

  text: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
  textOperator: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default ButtonsCalculator;
