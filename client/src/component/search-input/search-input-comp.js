import React, { useState} from 'react'
import { ReactComponent as Search }  from "../../assets/loupe.svg";
import { ReactComponent as Close }  from "../../assets/close.svg";

import{ withRouter} from"react-router-dom";

import {SearchButton,SearchInputContainer,SearchContainer,IconContainer} from "./search-input.styles";

function SearchInput({history}) {
 
  const [search, setSearch] = useState("");
  const [isOpen,setOpen] =useState(false);
    const handelSubmit=(e)=>{
      e.preventDefault();
     if(search){
      history.push(`/shop/search?query=${search}`);
      setSearch("");                                                          
      setOpen(false);
     }
      
    }
  
  return (
<>
<IconContainer onClick={()=>setOpen(!isOpen)}><Search/></IconContainer>
<SearchContainer isOpen={isOpen} >
 
  <SearchInputContainer type="search" aria-label="Search" value={search} autoComplete="off" placeholder="Ex. Jacket, Blouse" name="search" onChange={(e)=>setSearch(e.target.value)}/>
  <SearchButton aria-label="submit search for Item" type="submit"  onClick={handelSubmit}>
    <Search />
  </SearchButton>
  <IconContainer aria-label="close" className="close" onClick={()=>setOpen(false)}><Close /></IconContainer>
</SearchContainer>
</>
    )
  }


export default withRouter(SearchInput);
