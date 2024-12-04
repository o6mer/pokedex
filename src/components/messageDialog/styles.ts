import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: colors.gray,
    width: '70%',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
  },
  titleText: {
    color: colors.black,
    fontSize: fontSizes.xl4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleText: {
    color: colors.black,
    fontSize: fontSizes.xl2,
  },
});
