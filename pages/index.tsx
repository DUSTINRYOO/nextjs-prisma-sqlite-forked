import { NextPage } from "next";
import React from "react";
import useUser from "../lib/client/useUser";

const Home: NextPage = () => {
  useUser();
  return (
    <div>
      <h1>Welcome Nico!!</h1>
      <h2>Your email is: {}</h2>
    </div>
  );
};
export default Home;
