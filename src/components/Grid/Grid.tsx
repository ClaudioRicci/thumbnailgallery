import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../Card/Card";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { getItem } from "../../methods/generalMethods";
import uuid from "uuid";
import { pure } from "recompose";
import "./Grid.scss";

function Grid() {
  const [data, setData] = useState({ images: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://www.splashbase.co/api/v1/images/search?query=cars"
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {data.images.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.site}</a>
        </li>
      ))}
    </ul>
  );
}

export default pure(Grid);
