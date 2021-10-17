import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const SeriesLocation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/location/?limit=9")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Container>
        <Typography>Final Space Location</Typography>
      </Container>
    </div>
  );
};

export default SeriesLocation; 
