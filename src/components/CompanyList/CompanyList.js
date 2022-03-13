import React from "react";
import { Company } from "../Company";
import { tags } from "../../tags";

import './style.css';

export const CompanyList = ({ companies }) => (
  <>
    <div className="companies">
      {companies.map(({ name, date, linkTitle, linkUrl, tag }) => (
        <Company
          name={name}
          date={date}
          linkTitle={linkTitle}
          linkUrl={linkUrl}
          tagsName={tags[tag]}
        />
      ))}
    </div>
    {companies.length === 0 ? (
      <h3 className="text-center">Компаний не найдено</h3>
    ) : null}
  </>
);
