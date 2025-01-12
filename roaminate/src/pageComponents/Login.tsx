import { Box, Button, Card } from "@mui/material";
import { useState } from "react";
import Username from "../textfieldComponents/Username";
import Password from "../textfieldComponents/Password";

function Login() {
  //usestate for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const buttonHandler = () => {
    console.log(
      `The Username is ${username} \nThe password is ${password} \n  `
    );

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Card variant="outlined">
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <h1> Login </h1>

          <div>
            <p>Username</p>
            <Username username={username} setUsername={setUsername}></Username>
          </div>

          <div>
            <p>Password</p>
            <Password password={password} setPassword={setPassword}></Password>
          </div>
          <Button onClick={buttonHandler} variant="contained">
            Login
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default Login;
