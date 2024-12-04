import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fonts';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    paddingHorizontal: 24,
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e6f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 8,
  },
  searchRowContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  sortButton: {
    backgroundColor: '#50506e',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  searchInput: {
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    padding: 8,
  },
  titleText: {
    fontSize: fontSizes.xl5,
    fontWeight: '700',
  },
  subTitleText: {
    fontSize: fontSizes.lg,
  },
});
