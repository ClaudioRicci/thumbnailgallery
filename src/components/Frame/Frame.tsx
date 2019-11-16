import React, { useState, memo } from "react";
import Modal from "../Modal/Modal";
import "./Frame.scss";

function Frame(props: any) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <article key={props.id} className="frame" data-testid="frame">
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

export default memo(Frame);
