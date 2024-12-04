import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitleText: {
    fontSize: fontSizes.xl,
    fontWeight: '700',
    color: colors.black,
  },
});
