import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSizes} from '../../constants/fonts';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 16,
  },
  headerContainer: {
    alignItems: 'center',
    width: '100%',
  },
  backArrowButton: {
    position: 'absolute',
    left: 0,
  },
  pokemonNameText: {
    fontSize: fontSizes.xl3,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  pokemonIdText: {},
  pokemonImage: {
    width: '100%',
    borderRadius: 16,
    aspectRatio: 1 / 1.25,
  },
});
