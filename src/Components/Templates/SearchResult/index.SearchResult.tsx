import MoreButton from "Atoms/MoreButton/index.MoreButton";
import ProductContainer from "Organisms/ProductContainer/index.ProductContainer";
import RecommendWords from "Organisms/RecommendWord/index.RecommendWords";
import * as S from "Templates/SearchResult/style.SeacthResult";
import * as T from "Types/index";
import * as C from "Const/index";
import React, { useEffect, useState } from "react";
import CategoryTab from "Organisms/CategoryTab/index.CategoryTab";
import SortTab from "Organisms/SortTab/index.SortTab";
import * as Hangul from "hangul-js";
const stringSimilarity = require("string-similarity");

type SearchBarProps = {
  JsonData: T.JsonDataType[];
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

const SearchResult = ({
  JsonData,
  searchInput,
  setSearchInput,
}: SearchBarProps): JSX.Element => {
  const [moreButtonCount, setMoreButtonCount] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    C.Category.all
  );
  const [selectedSort, setSelectedSort] = useState<string>(
    C.sortMenu.highPopularity
  );
  const [filteredData, setFilteredData] = useState<T.JsonDataType[]>([]);
  const [isConsonant, setIsConsonant] = useState<boolean>(false);

  useEffect(() => {
    let newState = [...JsonData];

    // 선택한 카테고리 필터링
    newState =
      selectedCategory !== C.Category.all
        ? newState.filter((el) => el.ingredient === selectedCategory)
        : newState;

    if (searchInput.trim().length === 0) {
      newState =
        selectedSort === C.sortMenu.highPopularity
          ? newState.sort((a, b) => b.searchAmount - a.searchAmount)
          : selectedSort === C.sortMenu.highPrice
          ? newState.sort((a, b) => b.price - a.price)
          : newState.sort((a, b) => a.price - b.price);
      setIsConsonant(false)
      setFilteredData(newState);
      return;
    }

    if (Hangul.isConsonantAll(searchInput)) {
      // 문자열이 초성만 포함할 경우
      newState = newState.filter((el) => {
        const strArr: string[] = [];
        Hangul.disassemble(el.productName, true).map((itemArr) => {
          itemArr.map((item, index) => {
            index === 0 && strArr.push(item);
          });
        });

        el.similarity = stringSimilarity.compareTwoStrings(
          strArr.join("").trim().toLowerCase(),
          searchInput.toLowerCase()
        );

        return strArr.join("").trim().toLowerCase().indexOf(searchInput) !== -1;
      });

      //유사도에 맞춰 우선정렬
      newState = newState.sort((a, b) => b.similarity - a.similarity);
      setIsConsonant(true) 
      setFilteredData(newState);
      return;
    }
    //문자열이 완벽한 문자열일 경우
    newState =
      searchInput.trim().length !== 0
        ? newState.filter(
            (el) =>
              el.productName
                .toLowerCase()
                .indexOf(searchInput.toLowerCase()) !== -1
          )
        : newState;
    newState =
      selectedSort === C.sortMenu.highPopularity
        ? newState.sort((a, b) => b.searchAmount - a.searchAmount)
        : selectedSort === C.sortMenu.highPrice
        ? newState.sort((a, b) => b.price - a.price)
        : newState.sort((a, b) => a.price - b.price);

    setIsConsonant(false);
    setFilteredData(newState);
    return;
  }, [JsonData, selectedCategory, searchInput, selectedSort,isConsonant]);

  return (
    <>
      {isConsonant ? (
        <S.Info>{C.Info.message}</S.Info>
      ) : (
        <>
          <CategoryTab
            JsonData={JsonData}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <SortTab
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </>
      )}
      {filteredData.length > 0 ? (
        <S.SearchResultDiv>
          <S.ContainerWrapper>
            <>
              <ProductContainer
                filteredData={filteredData}
                moreButtonCount={moreButtonCount}
              />
            </>
          </S.ContainerWrapper>
          <MoreButton
            filteredData={filteredData}
            moreButtonCount={moreButtonCount}
            setMoreButtonCount={setMoreButtonCount}
          />
        </S.SearchResultDiv>
      ) : (
        <RecommendWords
          searchInput={searchInput}
          JsonData={JsonData}
          setSearchInput={setSearchInput}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </>
  );
};

export default SearchResult;
