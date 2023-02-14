import { NextPage } from "next";
import React from "react";
import useUser from "../lib/client/useUser";

const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <div>
      <h1>Welcome {user?.name}!!</h1>
      <h2>Your email is: {user?.email}</h2>
    </div>
  );
};
export default Home;
