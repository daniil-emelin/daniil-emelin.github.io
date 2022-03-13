import React from "react";

export const UpdateAlert = () => (
  <div className="mb-3">
    <div className="spinner-grow spinner-grow-sm text-danger" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </div>
    <small className="ms-1">
      При получении новой информации сайт обновляется автоматически
    </small>
  </div>
);
