import React, {useMemo, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../constants/colors';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {MainRoutesNames, useMainNavigation} from '../../routes/MainNavigator';
import useFetchPokemonPaginated from '../../hooks/useFetchPokemonsPaginated';
import {typeColors} from '../../constants/typeColors';

const HomeScreen = () => {
  const navigation = useMainNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFiler] = useState('');
  const [isFiltersShown, setIsFiltersShown] = useState(false);
  const {pokemons, fetchNextPage} = useFetchPokemonPaginated();

  const handlePokemonCardPressed = (name: string) => {
    navigation.navigate(MainRoutesNames.Details, {name});
  };

  const handleTypeFilerPress = (type: string) => setTypeFiler(type);

  const pokemonsToDisplay = useMemo(() => {
    return pokemons.filter(pokemon => {
      const matchesType = typeFilter
        ? pokemon.types.includes(typeFilter.toLowerCase())
        : true;

      const matchesSearchTerm = searchTerm
        ? pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(pokemon.id).includes(searchTerm)
        : true;

      return matchesType && matchesSearchTerm;
    });
  }, [pokemons, searchTerm, typeFilter]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.titleText}>Pokédex</Text>
      <Text style={styles.subTitleText}>
        Search for a Pokémon by name or using its National Pokédex number.
      </Text>
      <View style={styles.searchRowContainer}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={24} color={colors.darkGray} />
          <TextInput
            onChangeText={setSearchTerm}
            style={styles.searchInput}
            placeholder="Name or Id"
          />
        </View>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setIsFiltersShown(prev => !prev)}>
          <Icon name="sliders" size={18} color="white" />
        </TouchableOpacity>
      </View>
      {isFiltersShown ? (
        <View style={styles.filtersContainer}>
          {Object.keys(typeColors).map(type => {
            const isSelected = type === typeFilter;

            return (
              <TouchableOpacity
                onPress={() => handleTypeFilerPress(isSelected ? '' : type)}
                style={[
                  styles.filterButton,
                  isSelected && styles.selectedFilterButton,
                ]}>
                <Text style={isSelected && styles.selectedFilterText}>
                  {type}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
      <FlatList
        onEndReached={fetchNextPage}
        data={pokemonsToDisplay}
        numColumns={2}
        keyExtractor={pokemon => pokemon.name + pokemon.id}
        columnWrapperStyle={styles.contentContainerStyle}
        renderItem={({item: pokemon}) => (
          <PokemonCard
            pokemonDetails={pokemon}
            onCardPress={handlePokemonCardPressed}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
