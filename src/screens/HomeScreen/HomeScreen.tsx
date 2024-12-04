import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../constants/colors';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {pokemonMapper} from '../../utils/mapper';
import {
  getPokemonByUrl,
  getPokemonPaginated,
} from '../../services/pokemonService';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {addPokemonsToList} from '../../store/slices/pokemonSlice';
import {MainRoutesNames, useMainNavigation} from '../../routes/MainNavigator';

const pageSize = 20;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useMainNavigation();
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentOffset, setCurrentOffset] = useState(
    Math.floor(pokemons.length / pageSize),
  );

  useEffect(() => {
    const fetchPokemonList = async (offset: number) => {
      try {
        const data = await getPokemonPaginated(pageSize, offset * pageSize);

        const pokemonDetails = await Promise.all(
          data.results.map(async pokemon => {
            const details = await getPokemonByUrl(pokemon.url);

            return pokemonMapper(details);
          }),
        );

        dispatch(addPokemonsToList(pokemonDetails));
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemonList(currentOffset);
  }, [currentOffset, dispatch]);

  const handlePokemonCardPressed = (name: string) => {
    navigation.navigate(MainRoutesNames.Details, {name});
  };

  const pokemonsToDisplay = useMemo(() => {
    if (!searchTerm) {
      return pokemons;
    }
    return pokemons.filter(
      pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(pokemon.id).includes(searchTerm),
    );
  }, [pokemons, searchTerm]);

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
            placeholder="Name or id"
          />
        </View>
        <TouchableOpacity style={styles.sortButton}>
          <Icon name="sliders" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        onEndReached={() => setCurrentOffset(prev => prev + 1)}
        data={pokemonsToDisplay}
        numColumns={2}
        keyExtractor={pokemon => pokemon.name}
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
