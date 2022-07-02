import React from "react";
import { Button } from "native-base";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  function logMeOut() {
    //session out
    navigate("/");
  }

  return (
    <div>
      <Button onPress={() => logMeOut()}>Logout</Button>
    </div>
  );
};

export default Logout;
