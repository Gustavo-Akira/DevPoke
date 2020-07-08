import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import PokemonList from '../../components/PokemonList';
import api from '../../api';
import { PaginationContainer } from './styled';
import PaginationItem from '../../components/PaginationItem';
function Home(){
    const [pokemons, setPokemons] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [pagination, setPagination] = useState(0);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        api.getPokemons(activePage,search).then(async result=>{
            if(result !== null){
                setPokemons(result.results);
                
                if(result.count > 1){
                    setTotalPages(Math.ceil(result.count/9));
                }else{
                    setTotalPages(1);
                }
                if(((totalPages) - activePage) < 10 && totalPages/9 - activePage !== 0 && totalPages !==1){
                    setPagination(totalPages - activePage);
                }else{
                    if(!search){
                        console.log('inicial');
                        setPagination(5);
                    }else{
                        console.log('segundo');
                        setActivePage(0);
                        setPagination(1);
                    }
                }
            }
            
        });
    },[activePage,search]);
    return(
        <div>
            <SearchBar setSearch={setSearch} search={search}/>
            <PokemonList pokemons={pokemons} />
            <PaginationContainer>
            {activePage >= 1 &&
                <PaginationItem page={0} active={1} setActivePage={()=>setActivePage(activePage - 1)}>
                    {activePage}
                </PaginationItem>
            }
                {totalPages && Array(pagination).fill(0).map((item,index)=><PaginationItem active={activePage} key={index} page={activePage + index} setActivePage={()=>setActivePage(activePage + index)}>{activePage + index + 1}</PaginationItem>)}
            </PaginationContainer>
        </div>
    );
}

export default Home;