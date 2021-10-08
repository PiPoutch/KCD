import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { color, spacing, styles } from '../../theme';

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
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text_input: {
    width: "60%",
    height: 60,
    borderBottomColor: color.palette.appBorderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  currency_line: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  picker: {
    width: "35%",
    borderBottomColor: color.palette.appBorderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 60
  },
  button: {
    marginHorizontal: spacing.large
  }
}

export const ConversionScreenTextStyle: { [name: string]: TextStyle } = {
  text_input: {
    color: color.palette.appTextColor
  }
}