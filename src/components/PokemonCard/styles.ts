import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  cardContainer: {
    width: '48%',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
  },
  pokemonImage: {width: '100%', aspectRatio: 1 / 1.25},
  pokemonNameText: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    textTransform: 'capitalize',
    width: '100%',
    textAlign: 'center',
  },
  pokemonIdText: {
    fontSize: fontSizes.lg,
    color: colors.darkGray,
  },
});
