import React, { useLayoutEffect, memo } from "react";
import Frame from "../Frame/Frame";
import "./Modal.scss";

const Modal: React.SFC = props => {
  function shutModal() {
    const modalOverlay: any = document.getElementById("modal-overlay");
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
      <div className="modal-overlay__modal">
        <Frame {...props} />
        <button className="button closeButton" onClick={() => shutModal()}>
          <span>Close</span>
        </button>
      </div>
    </div>
  );
};

export default memo(Modal);
