import React, { useState } from "react";
import Modal from "../Modal/Modal";
import uuid from "uuid";
import { pure } from "recompose";
import { useMediaQuery } from "react-responsive";
import "./Card.scss";

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const isTabletOrAbove = useMediaQuery({
    query: "(min-device-width: 1025px)"
  });

  return (
    <article key={uuid.v4()} className="card" data-testid="card">
      <img
        src={props.img_url}
        alt={props.make + ": " + props.model + ", RRP: " + props.rrp}
      />
      <div className="detailsSurround">
        <div className="leftSectionSurround">
          <div className="leftSection">
            <h2>Make:</h2>
            <h2>Model:</h2>
          </div>
        </div>
        <div className="rightSectionSurround">
          <div className="rightSection">
            <p>{props.make}</p>
            <p>{props.model}</p>
          </div>
        </div>
      </div>
      {isTabletOrAbove ? (
        <button
          className="button moreInfoButton"
          onClick={() => setModalOpen(true)}
        >
          <span>More Info</span>
        </button>
      ) : (
        <div className="mobileSummarySurround">
          <p>{props.summary}</p>
        </div>
      )}
      {modalOpen && <Modal {...props} onClose={() => setModalOpen(false)} />}
      )}
    </article>
  );
}

export default pure(Card);
