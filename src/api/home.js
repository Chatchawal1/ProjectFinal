import React, { useEffect, useState } from "react";

const SportList = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/sport");
        const data = await response.json();
        setSports(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
};

export default SportList;
