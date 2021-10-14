import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Container>
        <h1>Hello hello!</h1>
      </Container>
    </div>
  );
}

export default App;
