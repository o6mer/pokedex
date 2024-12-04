import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    width: '100%',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSectionContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    padding: 12,
  },
  nicknameInput: {
    textAlign: 'right',
  },
});
