import React, { useState } from "react";
import Modal from "../Modal/Modal";
import uuid from "uuid";
import { pure } from "recompose";
import Button from "../Button/Button";
import "./Card.scss";

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article key={uuid.v4()} className="card" data-testid="card">
      <svg width="160" height="48" viewBox="0 0 52.966 52.966">
        <path
          d="M28.983,20h-6v-6c0-0.552-0.448-1-1-1s-1,0.448-1,1v6h-6c-0.552,0-1,0.448-1,1s0.448,1,1,1h6v6c0,0.552,0.448,1,1,1
		s1-0.448,1-1v-6h6c0.552,0,1-0.448,1-1S29.535,20,28.983,20z"
        />
        <path
          d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
		c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
		C52.074,52.304,52.086,51.671,51.704,51.273z M2.983,21c0-10.477,8.523-19,19-19s19,8.523,19,19s-8.523,19-19,19
		S2.983,31.477,2.983,21z"
        />
      </svg>
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

      {/* <Button className="button" {...props} /> */}

      {/* <button
        className="button moreInfoButton"
        onClick={() => setModalOpen(true)}
      >
        <span>More Info</span>
      </button> */}
      {modalOpen && <Modal {...props} onClose={() => setModalOpen(false)} />}
    </article>
  );
}

export default pure(Card);
