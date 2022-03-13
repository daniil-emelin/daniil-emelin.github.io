import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchCompany } from "./components/SearchCompany";
import { FilterTags } from "./components/FilterTags";
import { UpdateAlert } from "./components/UpdateAlert";
import { CompanyList } from "./components/CompanyList";
import companies from "./output.json";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchText, changeSearchText] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  useEffect(() => {
    setFilteredCompanies(() =>
      companies.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleCompanySearch = (e) =>
    changeSearchText(e.target.value.trimLeft());

  return (
    <div className="container">
      <Header />
      <SearchCompany searchText={searchText} onChange={handleCompanySearch} />
      <FilterTags
        setFilteredCompanies={setFilteredCompanies}
        searchText={searchText}
      />
      <UpdateAlert />
      <CompanyList companies={filteredCompanies}/>
    </div>
  );
}

export default App;
