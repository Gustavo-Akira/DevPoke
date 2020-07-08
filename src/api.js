import axios from 'axios';

const BASE = "https://pokeapi.co/api/v2/";

export default{
    getPokemons:async(offset = 0,search)=>{
        console.log(search);
        offset = offset * 9;
        
        if(!search){
            const res = await axios.get(BASE+'pokemon?limit=9&offset='+offset);
            return res.data;
        }else{
            const res = await axios.get(BASE+'pokemon/?limit=964');
            res.data.results = res.data.results.filter(result => result.name === search);
            if(res.data.results === undefined){
                return undefined;
            }
            res.data.count = res.data.results.length;
            return res.data;
        }
    },
    getPokemon: async(name='',id=0)=>{
        let res = '';
        if(name !== ''){
            res = await axios.get(BASE+'pokemon/'+name);
        }else{
            res = await axios.get(BASE+'pokemon/'+id);
        }
        return res.data;
    }
}