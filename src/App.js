import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: "300px"
  },
});


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
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
          Final Space React App with Material UI
        </Typography>
        {
          data.map((character) => (
            <Card
              style={{
                maxWidth: 345,
                boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                backgroundColor: "#fafafa",
              }}
            >
              <CardMedia style={{ height: "300px" }} image={character.img_url} />
            </Card>
          ))
        }
      </Container>
    </div>
  );
}

export default App;
