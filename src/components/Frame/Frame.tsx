import React, { useState } from "react";
import Modal from "../Modal/Modal";
import uuid from "uuid";
import { pure } from "recompose";
import "./Frame.scss";

function Frame(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <article key={uuid.v4()} className="frame" data-testid="frame">
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
      {modalOpen && <Modal {...props} onClose={() => setModalOpen(false)} />}
    </article>
  );
}

export default pure(Frame);
