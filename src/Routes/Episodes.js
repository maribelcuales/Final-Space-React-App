import React, { useEffect, useState } from "react";

const Episodes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/episode/?limit=12")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <h1>Final Space Episodes</h1>
  )
}

export default Episodes; 