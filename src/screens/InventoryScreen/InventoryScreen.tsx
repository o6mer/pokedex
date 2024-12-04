import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  editPokemonNickname,
  pokemonsSelector,
  toggleIsPokemonFavorite,
} from '../../store/slices/pokemonSlice';
import {CapturedPokemonCard} from '../../components/CapturedPokemonCard/CapturedPokemonCard';
import {Icon} from 'react-native-paper';
import {Pokemon} from '../../types/Pokemon';

const enum SortFields {
  Nickname = 'nickname',
  CaptureDate = 'captureDate',
}

const InventoryScreen: React.FC = () => {
  const pokemons = useSelector(pokemonsSelector);
  const dispatch = useDispatch();
  const [nicknameFilter, setNicknameFilter] = useState('');
  const [isFavoriteFilter, setIsFavoriteFilter] = useState(false);
  const [currentSortField, setCurrentSortField] = useState<SortFields>(
    SortFields.CaptureDate,
  );
  const [isCurrentSortAsc, setIsCurrentSortAsc] = useState(true);

  const onSavePokemonNickname = (id: number, nickname: string) => {
    dispatch(editPokemonNickname({id, nickname}));
  };
  const onToggleIsFavorite = (id: number) => {
    dispatch(toggleIsPokemonFavorite({id}));
  };
  const onChangeSort = (sortField: SortFields) => {
    setCurrentSortField(sortField);
    if (currentSortField === sortField) {
      setIsCurrentSortAsc(prev => !prev);
    }
  };
  const filterByNickname = useCallback(
    (pokemon: Pokemon) => pokemon.nickname.includes(nicknameFilter),
    [nicknameFilter],
  );
  const filterByIsFavorite = useCallback(
    (pokemon: Pokemon) =>
      isFavoriteFilter ? isFavoriteFilter === pokemon.isFavorite : true,
    [isFavoriteFilter],
  );
  const sortByNickname = useCallback(
    (pokemonA: Pokemon, pokemonB: Pokemon) =>
      isCurrentSortAsc
        ? pokemonA.nickname.localeCompare(pokemonB.nickname)
        : pokemonB.nickname.localeCompare(pokemonA.nickname),
    [isCurrentSortAsc],
  );
  const sortByCaptureDate = useCallback(
    (pokemonA: Pokemon, pokemonB: Pokemon) => {
      if (!pokemonA.captureDate || !pokemonB.captureDate) {
        return 0;
      }

      const dateA = new Date(pokemonA.captureDate).getTime();
      const dateB = new Date(pokemonB.captureDate).getTime();

      return isCurrentSortAsc ? dateA - dateB : dateB - dateA;
    },
    [isCurrentSortAsc],
  );

  const pokemonsToDisplay = useMemo(() => {
    const filteredPokemons = [...pokemons]
      .filter(filterByNickname)
      .filter(filterByIsFavorite);
    if (currentSortField === SortFields.Nickname) {
      return filteredPokemons.sort(sortByNickname);
    }
    if (currentSortField === SortFields.CaptureDate) {
      return filteredPokemons.sort(sortByCaptureDate);
    }
  }, [
    pokemons,
    filterByNickname,
    filterByIsFavorite,
    currentSortField,
    sortByNickname,
    sortByCaptureDate,
  ]);

  return (
    <FlatList
      data={pokemonsToDisplay}
      numColumns={2}
      keyExtractor={pokemon => pokemon.id.toString()}
      style={styles.screenContainer}
      columnWrapperStyle={styles.contentContainerStyle}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <View style={styles.headerSectionContainer}>
            <TouchableOpacity
              onPress={() => setIsFavoriteFilter(prev => !prev)}>
              <Icon
                size={20}
                source={`heart-multiple${isFavoriteFilter ? '' : '-outline'}`}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="חפש כינוי פוקימון"
              style={styles.nicknameInput}
              value={nicknameFilter}
              onChangeText={value => setNicknameFilter(value)}
            />
          </View>
          <View style={styles.headerSectionContainer}>
            <TouchableOpacity onPress={() => onChangeSort(SortFields.Nickname)}>
              <Icon
                size={20}
                source={`sort-alphabetical-${
                  currentSortField === SortFields.Nickname && isCurrentSortAsc
                    ? 'ascending'
                    : 'descending'
                }`}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onChangeSort(SortFields.CaptureDate)}>
              <Icon
                size={20}
                source={`sort-calendar-${
                  currentSortField === SortFields.CaptureDate &&
                  isCurrentSortAsc
                    ? 'ascending'
                    : 'descending'
                }`}
              />
            </TouchableOpacity>
          </View>
        </View>
      }
      renderItem={({item: pokemon}) => (
        <CapturedPokemonCard
          pokemon={pokemon}
          savePokemonNickname={onSavePokemonNickname}
          toggleIsFavorite={onToggleIsFavorite}
        />
      )}
    />
  );
};

export {InventoryScreen};
