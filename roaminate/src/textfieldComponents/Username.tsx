interface UsernameProps {
  username: string;
  setUsername: (value: string) => void;
}

function Email(props: UsernameProps) {
  return (
    <>
      <input
        value={props.username}
        type="email"
        onChange={(e) => props.setUsername(e.target.value)}
      ></input>
    </>
  );
}

export default Email;
