import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  screenContainer: {
    height: '100%',
    padding: 16,
    gap: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 4,
    width: '100%',
    backgroundColor: colors.white,
  },
  searchInput: {
    flex: 1,
    direction: 'rtl',
    textAlign: 'right',
    fontSize: fontSizes.xl,
  },
  currentPokemonContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 6,
    alignItems: 'center',
    gap: 12,
  },
  currentPokemonTitleContainer: {
    alignItems: 'center',
  },
  currentPokemonNameText: {
    fontSize: fontSizes.xl4,
    color: colors.black,
  },
  currentPokemonIdText: {
    fontSize: fontSizes.xl2,
  },
  currentPokemonImage: {
    flex: 1,
    width: '100%',
    objectFit: 'contain',
  },
  currentPokemonDetailsContainer: {
    gap: 8,
    width: '100%',
    marginTop: 'auto',
  },
  catchButton: {
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  catchPokemonText: {
    fontSize: fontSizes.xl3,
    fontWeight: 'bold',
    color: colors.white,
  },
});
