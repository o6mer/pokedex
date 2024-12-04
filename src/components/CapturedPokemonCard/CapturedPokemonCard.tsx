import React, {useState} from 'react';
import {Pokemon} from '../../types/Pokemon';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button, Icon, Modal, Portal} from 'react-native-paper';
import styles from './styles';

interface Props {
  pokemon: Pokemon;
  savePokemonNickname: (id: number, nickname: string) => void;
  toggleIsFavorite: (id: number) => void;
}

const CapturedPokemonCard: React.FC<Props> = ({
  pokemon,
  savePokemonNickname,
  toggleIsFavorite,
}) => {
  const [isNicknameEditDialogVisible, setIsNicknameEditDialogVisible] =
    useState(false);
  const [editedNickname, setEditedNickname] = useState(pokemon.nickname);

  const openNicknameEditDialog = () => setIsNicknameEditDialogVisible(true);
  const closeNicknameEditDialog = () => setIsNicknameEditDialogVisible(false);

  const onSaveNickname = () => {
    savePokemonNickname(pokemon.id, editedNickname);
    closeNicknameEditDialog();
  };

  return (
    <>
      <View key={pokemon.id} style={styles.pokemonCardContainer}>
        <Text style={styles.pokemonCardNameText}>{pokemon.name}</Text>
        <Image
          source={{uri: pokemon.picture}}
          style={styles.pokemonCardPicture}
        />
        <View style={styles.pokemonCardNickNameContainer}>
          <TouchableOpacity
            style={styles.pokemonCardEditNicknameButton}
            onPress={openNicknameEditDialog}>
            <Icon size={12} source="pencil" color="white" />
          </TouchableOpacity>
          <Text style={styles.pokemonCardNicknameText}>{pokemon.nickname}</Text>
        </View>
        <TouchableOpacity onPress={() => toggleIsFavorite(pokemon.id)}>
          {pokemon.isFavorite ? (
            <Icon source="heart" color="red" size={20} />
          ) : (
            <Icon source="heart-outline" color="black" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <Portal>
        <Modal
          visible={isNicknameEditDialogVisible}
          onDismiss={closeNicknameEditDialog}
          contentContainerStyle={styles.editNicknameDialogContainer}>
          <View style={styles.editNicknameDialogContentContainer}>
            <Text style={styles.editNicknameDialogTitle}>ערוך כינוי</Text>
            <TextInput
              value={editedNickname}
              onChangeText={value => setEditedNickname(value)}
              placeholder={pokemon.nickname}
              style={styles.editNicknameInput}
            />
            <View style={styles.editNicknameDialogActionContainer}>
              <Button
                buttonColor="grey"
                textColor="white"
                onPress={closeNicknameEditDialog}>
                ביטול
              </Button>
              <Button
                buttonColor="black"
                textColor="white"
                onPress={onSaveNickname}>
                שמירה
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export {CapturedPokemonCard};
