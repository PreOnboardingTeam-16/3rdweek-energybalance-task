import React, { useEffect, useState } from "react";
import { JsonDataType } from "src/Types";
import * as S from "Organisms/ProductContainer/style.ProductContainer";
import ProductCard from "Molecules/ProductCard/index.ProductCard";

type ProductContainerProps = {
  JsonData: JsonDataType[];
  moreButtonCount: number;
};
const ProductContainer = ({
  JsonData,
  moreButtonCount,
}: ProductContainerProps): JSX.Element => {
  const [ProductList, setProductList] = useState<JsonDataType[]>();
  const [tmpJsonData, setTmpJsonData] = useState<JsonDataType[]>(
    JsonData.slice()
  );
  useEffect(() => {
    if (!ProductList) {
      if (tmpJsonData.length <= 4) {
        setProductList(tmpJsonData.splice(0));
        setTmpJsonData(tmpJsonData);
        return;
      }
      if (tmpJsonData.length > 4) {
        setProductList(tmpJsonData.splice(0, 4));
        setTmpJsonData(tmpJsonData);
        return;
      }
    }
    if (ProductList) {
      console.log(tmpJsonData);
      if (tmpJsonData.length <= 4) {
        const newState = tmpJsonData.splice(0);
        setProductList([...ProductList, ...newState]);
        setTmpJsonData(tmpJsonData);
        return;
      }
      if (tmpJsonData.length > 4) {
        const newState = tmpJsonData.splice(0, 4);
        setProductList([...ProductList, ...newState]);
        setTmpJsonData(tmpJsonData);
        return;
      }
    }
  }, [moreButtonCount]);

  useEffect(() => {
    setProductList([]);
    setTmpJsonData(JsonData.slice());
  }, [JsonData]);

  return (
    <>
      <S.ContainerDiv>
        {ProductList && (
          <>
            {ProductList.map((item, idx) => (
              <S.ProductContainerDiv key={idx}>
                <ProductCard ProductData={item} />
              </S.ProductContainerDiv>
            ))}
          </>
        )}
      </S.ContainerDiv>
    </>
  );
};

export default ProductContainer;
