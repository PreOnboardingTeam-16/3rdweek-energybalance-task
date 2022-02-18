import React, { useEffect, useState } from "react";
import SearchButton from "Atoms/SearchButton/index.SearchButton";
import SearchInput from "Atoms/SearchInput/index.SearchInput";
import SearchHint from "Organisms/SearchHint/index.SearchHint";
import * as S from "Components/Templates/SearchBar/style.SearchBar";
import * as T from "src/Types";
type SearchBarProps = {
    JsonData: T.JsonDataType[];
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const handleButtonOnclick:T.Onclickhandler = (setSearchInput, inputState) =>{
    if(inputState === ''){
        return
    }
    setSearchInput(inputState);
};


const SearchBar = ({JsonData, searchInput, setSearchInput}:SearchBarProps):JSX.Element => {
    const [inputState, setInputState] = useState<string>('');
    const [hintArray, setHintArray] = useState<T.JsonDataType[]>([]);
    var timer:null| NodeJS.Timeout = null
    useEffect(()=> {
        if(!timer){
        timer =
        setTimeout( async() => {
            const temp:T.JsonDataType[] = [];
            JsonData.forEach(ele => {
                if(ele.productName.includes(inputState)){
                temp.push(ele);
                }});
            temp.sort((a, b) => b.searchAmount - a. searchAmount);
            setHintArray(temp.slice(0, 5));
            timer = null;
        }, 300);}
    }, [inputState])
    console.log(searchInput);
    console.log(hintArray);
    return(<>
        <S.SearchBox>
            <S.Form onSubmit={e=> e.preventDefault()}>
                <SearchInput inputState={inputState} setInputState={setInputState}/>
                <SearchButton onClickHandler={()=>handleButtonOnclick(setSearchInput, inputState)}/>
            </S.Form>
            {inputState.length > 0 && !(hintArray.length === 1 && hintArray[0].productName === inputState)? 
                <SearchHint dataList={hintArray}/>:<></>
            }
        </S.SearchBox>
    </>);
}

export default SearchBar;