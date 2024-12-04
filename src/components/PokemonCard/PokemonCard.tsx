import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {Pokemon} from '../../types/Pokemon';
import {typeColors} from '../../constants/typeColors';
import styles from './styles';

interface Props {
  pokemonDetails: Pokemon;
  onCardPress: (name: string) => void;
}

const PokemonCard = ({pokemonDetails, onCardPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onCardPress(pokemonDetails.name)}
      style={[
        styles.cardContainer,
        {backgroundColor: typeColors[pokemonDetails.types[0]]},
      ]}>
      <Image source={{uri: pokemonDetails.image}} style={styles.pokemonImage} />
      <Text style={styles.pokemonNameText}>{pokemonDetails.name}</Text>
      <Text style={styles.pokemonIdText}>{pokemonDetails.id}</Text>
    </TouchableOpacity>
  );
};

export default PokemonCard;
