import React, {useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {SearchIcon} from '../../assets/SearchIcon';
import {PokemonDetailsRow} from '../../components/pokemonDetailsRow/PokemonDetailsRow';
import {useSearchPokemon} from '../../hooks/useSearchPokemon';
import {PokemonIcon} from '../../assets/PokemonIcon';
import {useDispatch, useSelector} from 'react-redux';
import {catchPokemon, pokemonsSelector} from '../../store/slices/pokemonSlice';
import {MessageDialog} from '../../components/messageDialog/MessageDialog';
import {Divider} from '../../components/Divider/Divider';

const SearchScreen: React.FC = () => {
  const pokemons = useSelector(pokemonsSelector);
  const [search, setSearch] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const {searchPokemon, isLoading, isError, currentPokemon} =
    useSearchPokemon();
  const dispatch = useDispatch();

  const onCatchPokemon = () => {
    if (!currentPokemon) {
      return;
    }

    const isCaught = Math.random() > 0.5;

    if (!isCaught) {
      return setDialogMessage('לא הצלחת');
    }

    dispatch(catchPokemon({pokemon: currentPokemon}));
    setDialogMessage(`כל הכבוד! תפסת את ${currentPokemon.name}`);
  };
  const numberOfCatches = useMemo(() => {
    if (!currentPokemon) {
      return 0;
    }
    const caughtPokemon = pokemons.find(
      pokemon => pokemon.id === currentPokemon.id,
    );

    return caughtPokemon ? caughtPokemon.amount : 0;
  }, [currentPokemon, pokemons]);

  return (
    <KeyboardAvoidingView style={styles.screenContainer} behavior="height">
      <View style={styles.searchContainer}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
          returnKeyType="search"
          onSubmitEditing={() => searchPokemon(search)}
          placeholder="חפש שם של פוקימון"
        />
        <TouchableOpacity onPress={() => searchPokemon(search)}>
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : currentPokemon ? (
        <View style={styles.currentPokemonContainer}>
          <View style={styles.currentPokemonTitleContainer}>
            <Text style={styles.currentPokemonNameText}>
              {currentPokemon.name}
            </Text>
            <Text style={styles.currentPokemonIdText}>
              #{currentPokemon.id}
            </Text>
          </View>
          <Image
            style={styles.currentPokemonImage}
            source={{uri: currentPokemon.picture}}
          />
          <Divider />
          <View style={styles.currentPokemonDetailsContainer}>
            <PokemonDetailsRow title="סוג" data={currentPokemon.types} />
            <Divider />
            <PokemonDetailsRow title="יכולות" data={currentPokemon.abilities} />
          </View>
          <Divider />
          <TouchableOpacity onPress={onCatchPokemon} style={styles.catchButton}>
            <PokemonIcon width={40} height={40} />
            <Text style={styles.catchPokemonText}>תפוס!</Text>
          </TouchableOpacity>
          {numberOfCatches ? (
            <Text>יש ברשותך פוקימון זה: {numberOfCatches}</Text>
          ) : null}
        </View>
      ) : (
        <View>
          {isError ? (
            <Text>לא הצלחנו למצוא את הפוקימון שלך</Text>
          ) : (
            <Text>חפש פוקמיון</Text>
          )}
        </View>
      )}
      <MessageDialog
        visible={!!dialogMessage}
        onRequestClose={() => setDialogMessage('')}
        title={dialogMessage}
      />
    </KeyboardAvoidingView>
  );
};

export {SearchScreen};
