function App() {
  let name = "James";

  const buttonCLick = () => {
    console.log("clicked");
  };

  return (
    <>
      <h1>hello world {name} </h1>
      <p>testing the develop branch</p>
      <button onClick={buttonCLick}>Click me</button>
    </>
  );
}

export default App;
