import { flatten, mergeAll } from 'ramda';
import * as React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-paper';

import { color, spacing } from '../../theme';
import { Text } from '../text/text';
import { TextFieldProps } from './text-field.props';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[2],
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontSize: 14,
  backgroundColor: "transparent",
  paddingHorizontal: 0,
  marginTop: 0,
  paddingTop: 0
}

const enhance = (style: TextStyle, styleOverride: TextStyle | TextStyle[]) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export const TextField: React.FunctionComponent<TextFieldProps> = props => {
  const {
    label,
    onFocus,
    onBlur,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    error,
    ...rest
  } = props

  function handleFocus(event: any) {
    if (onFocus && typeof onFocus === "function") {
      onFocus(event)
    }
  }

  function handleBlur(event: any) {
    if (onBlur && typeof onBlur === "function") {
      onBlur(event)
    }
  }

  let containerStyle: ViewStyle | ViewStyle[] = {
    ...CONTAINER,
  }

  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle: TextStyle | TextStyle[] = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)

  return (
    <View style={containerStyle}>
      <TextInput
        label={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
        error={!!error}
        style={inputStyle}
        underlineColor={color.palette.appDarkGrey}
        selectionColor={color.palette.appPrimaryColor}
        ref={forwardedRef}
      />
      { error &&
        <Text
          text={error}
          style={{
            fontSize: 12,
            padding: 4,
            color: color.palette.appErrorsColor
          }}
        />
      }
    </View>
  )
}
