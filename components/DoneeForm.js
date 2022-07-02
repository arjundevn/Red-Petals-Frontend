import { Box, Button, Heading, Input, VStack } from "native-base";
import React from "react";

const DoneeForm = () => {
  return (
    <div>
      <Box
        alignItems="center"
        alignSelf="center"
        bg="gray.300"
        padding="30px"
        width="500px"
        borderRadius="lg"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
        <VStack space={4} alignItems="center">
          <Heading mx="auto">Donee Form</Heading>
          <Input mx="3" placeholder="Enter blood group" w="100%" />
          <Input mx="3" placeholder="Enter city" w="100%" />
          <Input mx="3" placeholder="Enter area" w="100%" />
          <Input mx="3" placeholder="Enter phone number" w="100%" />
          <Input mx="3" placeholder="Enter donation amount" w="100%" />
          <Button onPress={() => console.log("hello world")}>Click Me</Button>
        </VStack>
      </Box>
    </div>
  );
};

export default DoneeForm;
