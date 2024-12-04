import axios from 'axios';
import {PokemonResponse} from '../types/PokemonResponse';
import {instance} from './axiosInstance';

export const getPokemonPaginated = async (limit?: number, offset?: number) => {
  try {
    const {data} = await instance.get<{results: {url: string}[]}>(
      `pokemon?limit=${limit}&offset=${offset}`,
    );
    return data;
  } catch (error) {
    throw new Error('NOT_FOUND');
  }
};

export const getPokemonByUrl = async (url: string) => {
  try {
    const {data} = await axios.get<PokemonResponse>(url);
    return data;
  } catch (error) {
    throw new Error('NOT_FOUND');
  }
};

export const getPokemonById = async (id: string) => {
  try {
    const {data} = await instance.get<PokemonResponse>(`pokemon/${id}`);
    return data;
  } catch (error) {
    throw new Error('NOT_FOUND');
  }
};

export const getPokemonByName = async (name: string) => {
  try {
    const {data} = await instance.get<PokemonResponse>(`pokemon/${name}`);
    return data;
  } catch (error) {
    throw new Error('NOT_FOUND');
  }
};
