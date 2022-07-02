import { Heading, Text, Button, Box, HStack, Link } from "native-base";
import React from "react";
import CardComponent from "./CardComponent";
// import DoneeForm from "./doneeForm";

const HomePage = () => {
  const [showDoneeDetailCard, setIsDoneeDetailCard] = React.useState(false);
  const [showDoneeForm, setIsDoneeForm] = React.useState(false);
  const [showHistroy, setIsHistory] = React.useState(false);

  function donateBlood() {
    setIsDoneeDetailCard(true);
  }

  function askForBlood() {
    setIsDoneeForm(true);
  }

  function myHistory() {
    setIsHistory(true);
  }

  return (
    <>
      <Box alignItems="center">
        <HStack space={3} justifyContent="center">
          <Button
            height="100px"
            width="200px"
            component={Link}
            to="/donee"
            onPress={() => donateBlood()}
          >
            Donate blood
          </Button>
          {showDoneeDetailCard && <CardComponent />}
        </HStack>
      </Box>
    </>
  );
};

export default HomePage;
