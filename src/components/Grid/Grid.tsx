// import { getItem } from "../../methods/generalMethods";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import uuid from "uuid";
import { pure } from "recompose";
import "./Grid.scss";

function Grid() {
  const [data, setData] = useState({ images: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = "http://www.splashbase.co/api/v1/images/search?query=cars";
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return (
    <>
      {isError && (
        <main data-testid="grid">
          <h1> Whoops! An error occured</h1>
        </main>
      )}
      {isLoading ? (
        <main data-testid="grid">
          <LoadingCircle />
        </main>
      ) : (
        <ul>
          {data.images.map(item => (
            <>
              <li key={item.id}>
                <a href={item.url}>{item.site}</a>
              </li>
              <Card
                key={item.id}
                img_url={item.url}
                copyright={item.copyright}
                site={item.site}
              />
            </>
          ))}
        </ul>
      )}
    </>
  );
}

export default pure(Grid);
