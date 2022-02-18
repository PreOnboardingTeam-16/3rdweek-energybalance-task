import React, { useEffect, useState } from "react";
import Nav from "Components/Templates/Nav/index.Nav";
import SearchBar from "Components/Templates/SearchBar/index.SearchBar";
import styled from "styled-components";
import { GlobalStyle } from "Style/style";
import { JsonDataType } from "src/Types";

const Main = () => {
  const [JsonData, setJsonData] = useState<JsonDataType[]>([]);
  useEffect(() => {
    (async () => {
      await fetch("http://localhost:4000/results")
        .then((res) => res.json())
        .then((res) => setJsonData(res));
    })();
  }, []);
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <SearchBar JsonData={JsonData} />
    </Container>
  );
};

const Container = styled.div`

  width: 60vw;
  margin:auto;
  
  @media all and (max-width: 768px) {
    width: 100vw;
    margin: auto;
  }
`;

export default Main;