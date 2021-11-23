import { Box } from "native-base";
import React, { useState } from "react";
import ButtonsCalculator from "../components/ButtonCalculator";
import DisplayCalculator from "../components/DisplayCalculator";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  return (
    <Box flex={1} bg="#f7347a">
      <Box mx="3" mt="10">
        <DisplayCalculator result={result} value={value} />
      </Box>
      <Box mx="3" mt="10">
        <ButtonsCalculator
          result={result}
          setResult={setResult}
          value={value}
          setValue={setValue}
        />
      </Box>
    </Box>
  );
};

export default Calculator;
