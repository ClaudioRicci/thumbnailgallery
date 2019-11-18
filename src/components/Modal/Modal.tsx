import React, { useLayoutEffect, memo } from "react";
import Frame from "../Frame/Frame";
import Button from "../Button/Button";
import "./Modal.scss";

function Modal(props: any) {
  function closeModal() {
    const modalOverlay = document.getElementById("modal-overlay");
    modalOverlay.style.display = "none";
    if ((document.body.style.overflow = "hidden")) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
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
      <div className="modal-overlay__modal">
        <Frame {...props} />
        <span onClick={() => closeModal()}>
          <Button {...props} label="Close" buttonType="close" />
        </span>
      </div>
    </div>
  );
}

export default memo(Modal);
