import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { getItem } from "../../methods/generalMethods";
import uuid from "uuid";
import { pure } from "recompose";
import "./Grid.scss";

function Grid() {
  const firstUpdate = useRef(false);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [images, setImages] = useState(null);
  const allImages = "http://www.splashbase.co/api/v1/images/search?query=cars";

  console.table(allImages);

  useEffect(() => {
    if (!firstUpdate.current) {
      getItem(allImages)
        .then(res => {
          setImages(res);
          setLoad(true);
        })
        .catch(err => {
          setError(err);
          setLoad(true);
        });
    }
    firstUpdate.current = false;
  }, []);

  if (load) {
    return (
      <main className="grid" data-testid="grid">
        <div className="centered">
          <section className="cards">
            {error ? (
              <h1>{error.message}</h1>
            ) : (
              images.map(image => {
                const {
                  id,
                  url,
                  large_url,
                  source_id,
                  copyright,
                  site
                } = image;
                return (
                  <Card
                    key={uuid.v4()}
                    id={id}
                    url={url}
                    large_url={large_url}
                    source_id={source_id}
                    copyright={copyright}
                    site={site}
                  />
                );
              })
            )}
          </section>
        </div>
      </main>
    );
  } else {
    return (
      <main data-testid="grid">
        <LoadingCircle />
      </main>
    );
  }
}

export default pure(Grid);
