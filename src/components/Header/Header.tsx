import React from 'react';
import {Text, View} from 'react-native';
import {PokemonIcon} from '../../assets/PokemonIcon';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <PokemonIcon />
      <Text style={styles.headerTitleText}>שלום, עומר</Text>
    </View>
  );
};

export {Header};
