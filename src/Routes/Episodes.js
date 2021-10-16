import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const Episodes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/episode/?limit=12")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Container>
        <Typography>Final Space List of Episodes</Typography>

      </Container>
    </div>
  );
};

export default Episodes;
