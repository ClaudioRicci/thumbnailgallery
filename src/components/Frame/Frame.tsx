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

Frame.defaultProps = {
  id: 0,
  large_url: "https://splashbase.s3.amazonaws.com/unsplash/large/14ZGHd9",
  copyright: "CCO",
  site: "unknown"
};

export default memo(Frame);
