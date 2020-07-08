const initialState = {
    pokemons:Array(0).fill(0),
    qualquer:'teste'
};

export default (state = initialState, action) =>{
    let pokemons;
    if(state.pokemons !== undefined){
        pokemons = [...state.pokemons];
    }
    switch(action.type){
        case 'ADD_POKEMON':
            if(pokemons !== undefined){
                let name = action.payload.name;
                let index = pokemons.findIndex(pokemon => pokemon.name === name);
                
                if(index > -1){
                    pokemons[index].qt += 1;
                }else{
                pokemons.push({name:action.payload.name,qt:1});
                }
            }else{
                pokemons = [{name:action.payload.name,qt:1}]
            }
            return{...state,pokemons};
            case 'CHANGE_POKEMON':
                if(pokemons.findIndex(pokemon=> pokemon.name === action.payload.key)){
                    let i = pokemons.findIndex(pokemon=> pokemon.name === action.payload.key);
                    
                    switch(action.payload.type){
                        case '-':
                            if(pokemons[i].qt === 1){
                               pokemons = pokemons.filter((item,index)=> item.name !== action.payload.key);
                            }else{
                                pokemons[i].qt--;
                            }
                        break;
                        case '+':
                            pokemons[i].qt++
                        break;
                        default:
                        break;
                    }
                }else{
                    switch(action.payload.type){
                        case '-':
                            if(pokemons[0].qt === 1){
                               pokemons = pokemons.filter((item,index)=> item.name !== action.payload.key);
                            }else{
                                
                                pokemons[0].qt--;
                            }
                        break;
                        case '+':
                            pokemons[0].qt++
                        break;
                        default:
                        break;
                    }
                }
                
            return {...state,pokemons};
            case 'PURCHASE':
                state.pokemons  = [{}];
            return{state}
        default:
            return state;
    }
}