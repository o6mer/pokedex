export interface PokemonResponse {
  id: string;
  name: string;
  types: {type: {name: string}}[];
  forms: {name: string}[];
  abilities: {ability: {name: string}}[];
  sprites: {
    front_default: string;
  };
}
