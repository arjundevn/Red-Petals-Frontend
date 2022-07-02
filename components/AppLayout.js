import { Center, Container, Heading, Text } from "native-base";
import React from "react";
import CardComponent from "./CardComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import DoneeForm from "./DoneeForm";
import History from "./MyHistory";
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
