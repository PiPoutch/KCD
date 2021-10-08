import { Appearance, Platform } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { darkpalette } from './darkpalette';
import { lightpalette } from './lightpalette';

const isDarkMode = Appearance.getColorScheme() === 'dark'

if (Platform.OS === "android") {
  try {
    changeNavigationBarColor(isDarkMode ? '#000000' : '#FFFFFF', isDarkMode ? false : true, true)
  } catch (e) {
    if (__DEV__) {
      console.log("failed setting Android navigation bar color")
    }
  }
}
export const palette = isDarkMode ? darkpalette : lightpalette

