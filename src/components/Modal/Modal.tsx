import React, { useLayoutEffect } from "react";
import Button from "../Button/Button";
import Frame from "../Frame/Frame";
import { pure } from "recompose";
import "./Modal.scss";

function Modal({ id, url, large_url, copyright, site, onClose }) {
  function shutModal() {
    const modalOverlay = document.getElementById("modal-overlay");
    modalOverlay.style.display = "none";
  }

  function useLockBodyScroll() {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  }

  useLockBodyScroll();

  return (
    <div id="modal-overlay" className="modal-overlay" data-testid="modal">
      <div className="modal">
        <Button
          label="Close"
          onClick={onClose}
          buttonType="button closeButton"
        />
        <Frame
          key={id}
          thumbnail_url={url}
          large_url={large_url}
          copyright={copyright}
          site={site}
        />

        <button className="button closeButton" onClick={() => shutModal()}>
          <span>Close</span>
        </button>
      </div>
    </div>
  );
}

export default pure(Modal);
