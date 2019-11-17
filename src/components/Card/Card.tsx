import React, { useState, memo } from "react";
import Modal from "../Modal/Modal";
import SearchIcon from "../SearchIcon/SearchIcon";
import "./Card.scss";

function Card(props: any) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article key={props.id} className="card" data-testid="card">
      <button onClick={() => setModalOpen(true)}>
        <SearchIcon />
      </button>
      <img
        src={props.thumbnail_url}
        alt={
          "Image is copyright of " +
          props.copyright +
          ", sourced by " +
          props.site +
          "."
        }
      />
      <div className="card__details">
        <div className="card__details__left__section__surround">
          <div className="card__details__left__section">
            <h2>Image Source:</h2>
            <h3>Copyright:</h3>
          </div>
        </div>
        <div className="card__details__right__section__surround">
          <div className="card__details__right__section">
            <p>{props.site}</p>
            <p>{props.copyright}</p>
          </div>
        </div>
      </div>
      {modalOpen && <Modal {...props} onClose={() => setModalOpen(false)} />}
    </article>
  );
}

Card.defaultProps = {
  id: 0,
  thumbnail_url:
    "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mrraevBLsP1st5lhmo1_1280.jpg",
  large_url: "https://splashbase.s3.amazonaws.com/unsplash/large/14ZGHd9",
  copyright: "CC0",
  site: "unknown"
};

export default memo(Card);
