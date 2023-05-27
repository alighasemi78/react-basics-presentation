function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>From Greeting</p>
      <p>{3 + 4}</p>
    </div>
  );
}

export default Greeting;
