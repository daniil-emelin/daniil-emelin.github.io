import React from "react";

export const SearchCompany = ({ searchText, onChange }) => (
  <div className="input-group input-group-lg mb-3 mt-3">
    <input
      type="text"
      className="form-control"
      placeholder="Поиск компании..."
      value={searchText}
      onChange={onChange}
      autoFocus={true}
    />
  </div>
);
