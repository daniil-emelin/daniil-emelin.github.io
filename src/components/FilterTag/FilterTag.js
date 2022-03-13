import React from "react";
import cn from "classnames";

export const FilterTag = ({ text, amount, onClick, isTagActive = false }) => (
  <button
    type="button"
    className={cn({
      btn: true,
      "btn-sm": true,
      "mr-3": true,
      [isTagActive ? "btn-primary" : "btn-outline-primary"]: true,
    })}
    onClick={onClick}
  >
    {text} <span className="badge bg-primary">{amount}</span>
  </button>
);
