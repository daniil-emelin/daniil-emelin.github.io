import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import "dayjs/locale/ru";

import "./style.css";

dayjs.locale("ru");
dayjs.extend(customParseFormat);

export const Company = ({ name, date, linkUrl, linkTitle, tagsName }) => {
  const formattedDate = dayjs(date, "DD.MM.YYYY").format("D MMM");

  return (
    <div className="company-item">
      <div className="header-info">
        <div className="tag">{tagsName}</div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="header">{name}</div>
      <a
        href={linkUrl}
        target="_blank"
        rel="noreferrer"
        className="company-link link-secondary"
      >
        {linkTitle}
      </a>
    </div>
  );
};
