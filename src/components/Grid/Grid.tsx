import React, { useState, useEffect, memo } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import axios from "axios";
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
      {isError && <LoadingCircle message="Whoops! An error occured" />}
      {isLoading ? (
        <LoadingCircle message="Loading..." />
      ) : (
        <>
          {!isError && (
            <section className="grid__cards">
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
          )}
        </>
      )}
    </main>
  );
}

export default memo(Grid);
