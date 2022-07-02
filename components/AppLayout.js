import { Center, Container, Heading, Text } from "native-base";
import React from "react";
import CardComponent from "./cardComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
// import MenuDrawer from "./mainMenu";
import DoneeForm from "./doneeForm";
import History from "./MyHistory";
import { ConnectWallet } from "./connectWallet";
import Login from "./LoginPage";

const AppLayout = () => {
  return (
    <>
      <Center>
        <Container>
          {/* App routing structure */}
          {/* <MenuDrawer /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/donee" element={<CardComponent />} />
              <Route path="/ask" element={<DoneeForm />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </Center>
      ;
    </>
  );
};

export default AppLayout;
