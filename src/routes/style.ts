import {StyleSheet} from 'react-native';
import {fontSizes} from '../constants/fonts';

export default StyleSheet.create({
  tabBar: {
    height: 60,
  },
  tabBarItem: {
    justifyContent: 'center',
  },
  tabBarLabelText: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  tabBarIcon: {
    height: 12,
    width: 12,
  },
});
