import React, { useLayoutEffect } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Modal.scss";

export default function Modal({
  make,
  model,
  img_url,
  rrp,
  carwow_rating,
  summary,
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
        <Card
          make={make}
          model={model}
          summary={summary}
          img_url={img_url}
          rrp={rrp}
          carwow_rating={carwow_rating}
        />
        <Button
          link=""
          title=""
          label="Get Offers"
          buttonType="button getOfferButton"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
