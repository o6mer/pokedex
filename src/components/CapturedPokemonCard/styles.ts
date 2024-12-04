import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  pokemonCardContainer: {
    width: '48%',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 8,
    backgroundColor: colors.white,
    gap: 4,
  },
  pokemonCardPicture: {
    width: '100%',
    height: 100,
  },
  pokemonCardNickNameContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  pokemonCardNameText: {
    fontSize: fontSizes.xl2,
    color: colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  pokemonCardNicknameText: {
    fontSize: fontSizes.xl,
  },
  pokemonCardEditNicknameButton: {
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGray,
    borderRadius: 99999,
  },
  editNicknameDialogContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  editNicknameDialogContentContainer: {
    width: '50%',
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    gap: 8,
  },
  editNicknameDialogTitle: {
    fontSize: fontSizes.xl3,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  editNicknameInput: {
    textAlign: 'right',
    borderBottomWidth: 1,
    fontSize: fontSizes.xl,
    color: colors.black,
  },
  editNicknameDialogActionContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
