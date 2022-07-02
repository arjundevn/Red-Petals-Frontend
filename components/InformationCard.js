import {
  Box,
  Heading,
  Divider,
  Flex,
  Text,
  Stack,
  HStack,
  VStack,
} from "native-base";
import React from "react";

const InfomationCard = (props) => {
  const doneeDetail = props.details;

  return (
    <>
      <HStack space="2.5" mt="4" px="8" justifyContent="center">
        {doneeDetail?.map((ele, index) => {
          return (
            <div key={index}>
              <Box
                shadow="2"
                rounded="lg"
                w={260}
                _light={{ bg: "coolGray.50" }}
                _dark={{ bg: "gray.700" }}
              >
                <Heading mx="auto">{ele.requestId}</Heading>
                <Divider
                  my="2"
                  _light={{
                    bg: "muted.800",
                  }}
                  _dark={{
                    bg: "muted.50",
                  }}
                />
                <VStack mx="auto">
                  <Text color="coolGray.50">Blood group: {ele.bloodGroup}</Text>
                  <Text color="coolGray.50">Amount: {ele.amount}</Text>
                  <Text color="coolGray.50">Area: {ele.area}</Text>
                  <Text color="coolGray.50">City: {ele.city}</Text>
                </VStack>
              </Box>
            </div>
          );
        })}
      </HStack>
    </>
  );
};

export default InfomationCard;
