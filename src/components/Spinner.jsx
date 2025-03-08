// src/components/Spinner.jsx
import React from "react";
import { Spinner as BootstrapSpinner } from "react-bootstrap";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <BootstrapSpinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner;
