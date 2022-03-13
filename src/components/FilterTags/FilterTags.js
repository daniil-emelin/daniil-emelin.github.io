import React, { useEffect, useState } from "react";
import { FilterTag } from "../FilterTag";
import { tags } from "../../tags";
import companies from "../../output.json";

import "./style.css";

export const FilterTags = ({ setFilteredCompanies, searchText }) => {
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    setActiveFilter("");
  }, [searchText]);

  return (
    <>
      <div class="filterTags mb-3">
        <FilterTag
          text="Все"
          amount={companies.length}
          onClick={() => {
            setActiveFilter("");
            setFilteredCompanies(companies);
          }}
          isTagActive={activeFilter === ""}
        />
        {Object.keys(tags).map((filterTag) => {
          return (
            <FilterTag
              text={tags[filterTag]}
              amount={companies.filter(({ tag }) => filterTag === tag).length}
              onClick={() => {
                setActiveFilter(filterTag);
                setFilteredCompanies(
                  companies.filter(({ tag }) => filterTag === tag)
                );
              }}
              isTagActive={activeFilter === filterTag}
            />
          );
        })}
      </div>
    </>
  );
};
