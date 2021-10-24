import {URL} from "./api";
import {LIMITPAGE} from "../Utils/constants";

export const getListPokemon = async(page = 1) => {
    try{

        let limit = LIMITPAGE;
        let offset = page === 1 ? 0 : limit * page;

        let response = await fetch(`${URL}pokemon-species?offset=${offset}&limit=${limit}`, {
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        return response.json()
    } catch (e) {
        return e;
    }
}

export const getPokemon = async (pokemon) => {
    try{
        let response = await fetch(`${URL}pokemon/${pokemon}`, {
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