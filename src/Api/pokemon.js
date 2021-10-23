import {URL} from "./api";

export const getListPokemon = async() => {
    try{
        let response = await fetch(`${URL}pokemon`, {
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        return await response.json()
    } catch (e) {
        throw new Error(e)
    }
}

export const getPokemon = async (pokemon) => {
    try{
        let response = await fetch(`${pokemon}`, {
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        return await response.json()
    } catch (e) {
        throw new Error(e)
    }
}