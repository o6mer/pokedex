import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {MainRouteProps, useMainNavigation} from '../../routes/MainNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {getPokemonByName} from '../../services/pokemonService';
import {setCurrentPokemon} from '../../store/slices/pokemonSlice';
import {pokemonMapper} from '../../utils/mapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {typeColors} from '../../constants/typeColors';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useMainNavigation();
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemons.currentPokemon,
  );
  const {name} = useRoute<MainRouteProps<'Details'>>().params;

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await getPokemonByName(name);

      dispatch(setCurrentPokemon(pokemonMapper(data)));
    };

    fetchPokemonDetails();
  }, [dispatch, name]);

  if (!pokemonDetails) return null;

  const handleBackPress = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.backArrowButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.pokemonNameText}>{pokemonDetails.name}</Text>
        <Text style={styles.pokemonIdText}>{pokemonDetails.id}</Text>
      </View>
      <Image
        source={{uri: pokemonDetails.image}}
        style={[
          styles.pokemonImage,
          {backgroundColor: typeColors[pokemonDetails.types[0]]},
        ]}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
