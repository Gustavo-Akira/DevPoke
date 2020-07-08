import React, { useState, useEffect } from 'react';
import { SearchInput } from './styled';

let searchTimer = null;
const SearchBar = ({setSearch,search}) =>{
    const [search2, setSearch2] = useState('');
    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(async ()=>{
            await setSearch(search2);
        },1000);
    },[search2]);
    return(
        <SearchInput value = {search2} onChange={e=>setSearch2(e.target.value)} type="text" placeholder="Pesquise"/>
    );
}

export default SearchBar;