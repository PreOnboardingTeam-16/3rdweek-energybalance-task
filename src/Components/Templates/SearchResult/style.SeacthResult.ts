import { SCREEN_MD_MAX, SCREEN_MD_MIN } from "Const/index";
import styled from "styled-components";

export const SearchResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  margin-bottom: 44px;

  @media all and (min-width: ${SCREEN_MD_MIN}px) {
    margin-bottom: 115px;
  }
`;

export const Info = styled.div`
padding: 10px 20px;
margin:41.5px 0;
text-align: center;
font-weight: 600;
font-size: 14px;
background: #f5f5f7;

@media all and (max-width: ${SCREEN_MD_MAX}px) {
  margin:32px 0;
  }
`
