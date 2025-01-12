import { useState } from "react";

interface passwordProp {
  password: string;
  setPassword: (value: string) => void;
}

function Password(props: passwordProp) {
  return (
    <>
      <input
        type="password"
        value={props.password}
        onChange={(e) => {
          props.setPassword(e.target.value);
        }}
      ></input>
    </>
  );
}

export default Password;
