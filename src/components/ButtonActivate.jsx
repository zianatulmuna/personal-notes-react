import React from "react";

function ButtonActivate({ id, onActivate }) {
  return (
    <button
      type="button"
      className="notes-list__archive btn"
      onClick={() => onActivate(id)}>
      <i className="bi bi-archive-fill pe-1"></i>
      Aktifkan
    </button>
  );
}

export default ButtonActivate;
