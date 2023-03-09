import React, { useEffect, useState } from "react";
import { Container } from "@mui/material"
import Searcher from "./components/searcher";
import getGithubUser from "./services/user";
import { userOctocat } from "./constants";
import UserCard from "./containers/UserCard";

function App() {
  const [inputUser, setInputUser] = useState(userOctocat);
  const [userState, setUserState] = useState("");

  const getInputUser = async (user) => {
    const userResponse = await getGithubUser(user);
    if (!userResponse.login) {
      setInputUser(userOctocat);
    }
    setUserState(userResponse);
    // console.log("getInputUser | userResponse", userResponse);
  };

  useEffect(() => {
    getInputUser(inputUser);
  }, [inputUser]);

  return (
    <Container sx={{
      background: "whitesmoke",
      width: "80vw",
      height: "500px",
      borderRadius: "16px",
      marginTop: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
