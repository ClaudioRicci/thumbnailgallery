import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Card from "../Card/Card";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
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
    <main className="grid" data-testid="grid">
      <div className="centered">
        {isError && (
          <main>
            <h1> Whoops! An error occured</h1>
          </main>
        )}
        {isLoading ? (
          <main>
            <LoadingCircle />
          </main>
        ) : (
          <>
            <section className="cards">
              <Header title="Thumbnail Gallery" />
              {data.images.map(item => (
                <Card
                  key={item.id}
                  thumbnail_url={item.url}
                  large_url={item.large_url}
                  copyright={item.copyright}
                  site={item.site}
                />
              ))}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default pure(Grid);
