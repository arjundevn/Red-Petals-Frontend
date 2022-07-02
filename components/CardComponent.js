import React from "react";
import DoneeDetails from "./doneeDetails";
import { Button } from "native-base";
import { useNavigate } from "react-router-dom";

const sampleDoneeData = [
  {
    requestId: 1234,
    bloodGroup: "A+",
    city: "Bangalore",
    area: "Nagwara",
    phone: "1234567890",
    amount: 300,
  },
  {
    requestId: 5678,
    bloodGroup: "B+",
    city: "Bangalore",
    area: "Nagwara",
    phone: "1234567890",
    amount: 100,
  },
  {
    requestId: 4563,
    bloodGroup: "O+",
    city: "Bangalore",
    area: "Nagwara",
    phone: "1234567890",
    amount: 700,
  },
];

const CardComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onPress={() => navigate("/home")}>Go back</Button>
      <DoneeDetails details={sampleDoneeData} />
    </>
  );
};

export default CardComponent;
