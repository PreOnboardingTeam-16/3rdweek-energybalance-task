import React, { useEffect, useState } from "react";
import Nav from "Templates/Nav/index.Nav";
import SearchBar from "Templates/SearchBar/index.SearchBar";
import { GlobalStyle } from "Style/style";
import * as T from "Types/index";
import * as S from "Pages/Main/style.Main";
import SearchResult from "Components/Templates/SearchResult/index.SearchResult";

const Main = () => {
  const [JsonData, setJsonData] = useState<T.JsonDataType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:4000/results")
        .then((res) => res.json())
        .then((res) => setJsonData(res));
    })();
  }, []);

  return (
    <S.Container>
      <GlobalStyle />
      <Nav />
      <SearchBar
        JsonData={JsonData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <SearchResult
        JsonData={JsonData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </S.Container>
  );
};

export default Main;