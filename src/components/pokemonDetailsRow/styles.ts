import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  rowContainer: {
    gap: 8,
    alignItems: 'center',
  },
  scrollViewContainer: {
    width: '100%',
    borderRadius: 6,
  },
  contentContainer: {
    gap: 12,
    padding: 8,
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentItem: {
    color: colors.lightGray,
    backgroundColor: colors.veryDarkGray,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    textTransform: 'capitalize',
  },
  titleText: {
    fontSize: fontSizes.xl3,
    color: colors.black,
  },
});
