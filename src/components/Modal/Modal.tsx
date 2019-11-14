import React, { useLayoutEffect } from "react";
import Button from "../Button/Button";
import Frame from "../Frame/Frame";
import "./Modal.scss";

export default function Modal({
  id,
  url,
  large_url,
  copyright,
  site,
  onClose
}) {
  function useLockBodyScroll() {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  }

  useLockBodyScroll();

  return (
    <div className="modal-overlay" data-testid="modal">
      <div className="modal">
        <Button
          link=""
          title=""
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
      </div>
    </div>
  );
}
