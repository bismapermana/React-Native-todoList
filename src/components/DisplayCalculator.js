import React from "react";
import { Box, Heading, Text, VStack } from "native-base";

const DisplayCalculator = (props) => {
  return (
    <VStack>
      <Heading ml="5" color="white">
        Display
      </Heading>
      <Box p="3" py="5" borderRadius="lg" bg="#ECECEC" mt="3">
        <Text fontSize="20">{props.value}</Text>
        <Text fontSize="30">{props.result}</Text>
      </Box>
    </VStack>
  );
};

export default DisplayCalculator;
