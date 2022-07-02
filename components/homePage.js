import { Heading, Text, Button, Box, HStack, Link } from "native-base";
import React from "react";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";
import GetAddress from './GetAddress'

// import DoneeForm from "./doneeForm";

const HomePage = () => {
  const navigate = useNavigate();
  const [showDoneeDetailCard, setIsDoneeDetailCard] = React.useState(false);
  const [showDoneeForm, setIsDoneeForm] = React.useState(false);
  const [showHistroy, setIsHistory] = React.useState(false);

  function donateBlood() {
    setIsDoneeDetailCard(true);
    navigate("/donee");
  }

  function askForBlood() {
    setIsDoneeForm(true);
    navigate("/ask");
  }

  function myHistory() {
    setIsHistory(true);
    navigate("/history");
  }

  return (
    <>
      <Box alignItems="center">
      <GetAddress />
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
          {showDoneeDetailCard && <CardComponent address={address}/>}
          <Button height="100px" width="200px" onPress={() => askForBlood()}>
            Ask for blood
          </Button>
          {showDoneeForm && <DoneeForm />}
          <Button
            height="100px"
            width="200px"
            component={Link}
            to="/history"
            onPress={() => myHistory()}
          >
            My history
          </Button>
          {showHistroy && <History />}
        </HStack>
      </Box>
    </>
  );
};

export default HomePage;
