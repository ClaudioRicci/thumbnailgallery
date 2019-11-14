import React, { useState } from "react";
import Modal from "../Modal/Modal";
import uuid from "uuid";
import { pure } from "recompose";
import "./Card.scss";

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article key={uuid.v4()} className="card" data-testid="card">
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
      <div className="detailsSurround">
        <div className="leftSectionSurround">
          <div className="leftSection">
            <h2>Image Source:</h2>
            <h2>Copyright:</h2>
          </div>
        </div>
        <div className="rightSectionSurround">
          <div className="rightSection">
            <p>{props.site}</p>
            <p>{props.copyright}</p>
          </div>
        </div>
      </div>

      <button
        className="button moreInfoButton"
        onClick={() => setModalOpen(true)}
      >
        <span>More Info</span>
      </button>
      {modalOpen && <Modal {...props} onClose={() => setModalOpen(false)} />}
    </article>
  );
}

export default pure(Card);
