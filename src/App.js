import { useState } from "react";


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullname, setFullName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={{ width: "200px" }}></input>
        </div>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={{ width: "200px" }}></input>
        </div>

        <button type="submit">Submit</button>
      </form>
      {fullname ? (<p>Full Name: {fullname}</p>) : null}
    </div>
  );
}

export default App;
