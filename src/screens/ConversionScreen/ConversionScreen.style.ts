import { StyleSheet, ViewStyle } from 'react-native';

import { color, styles } from '../../theme';

export const ConversionScreenStyle: { [name: string]: ViewStyle } = {
  ...styles,
  FULL: {
    ...styles.FULL,
    height: "100%",
    position: 'relative',
  },
  CONTAINER: {
    ...styles.CONTAINER,
    position: 'relative',
  },
  text_input: {
    width: "100%",
    height: 20,
    borderBottomColor: color.palette.appBorderColor,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
}