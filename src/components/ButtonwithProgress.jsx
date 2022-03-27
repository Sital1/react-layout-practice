import { Button } from "react-bootstrap";
import React from "react";
import { Spinner } from "react-bootstrap";

function ButtonWithProgress(props) {
  return (
    <>
      <Button
        variant={props.variant}
        className="d-flex justify-content-center"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.pendingApiCall && (
          <Spinner className="m-1" animation="border" role="status" size="sm">
            <span className="visually-hidden text-light">Loading...</span>
          </Spinner>
        )}
        {props.text}
      </Button>
    </>
  );
}

export default ButtonWithProgress;