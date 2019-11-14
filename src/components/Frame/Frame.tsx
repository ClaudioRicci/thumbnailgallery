import React, { useState } from "react";
import Modal from "../Modal/Modal";
import uuid from "uuid";
import { pure } from "recompose";
import Button from "../Button/Button";
import "./Frame.scss";

function Frame(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article key={uuid.v4()} className="frame" data-testid="frame">
      {/* <button
        className="button moreInfoButton"
        onClick={() => setModalOpen(true)}
      >
        <span>More Info</span>
      </button> */}

      <img
        src={props.large_url}
        alt={
          "Image is copyright of " +
          props.copyright +
          ", sourced by " +
          props.site +
          "."
        }
      />
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

export default pure(Frame);
