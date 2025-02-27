import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Password from "../textfieldComponents/Password";
import Username from "../textfieldComponents/Username";
import { Button } from "@mui/material";
import { useState } from "react";

/**
 * There is going to be a parent and child relationship with this component
 * and with textfield components with the Username and password
 *
 * future notes is the child component will be manipulating the useState variables of the parent
 *
 * @returns
 */
function Signup() {
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
          <h1> Sign up </h1>

          <div>
            <p>Username</p>
            <Username username={username} setUsername={setUsername}></Username>
          </div>

          <div>
            <p>Password</p>
            <Password password={password} setPassword={setPassword}></Password>
          </div>
          <Button onClick={buttonHandler} variant="contained">
            Create
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default Signup;
