import { flatten, mergeAll } from 'ramda';
import * as React from 'react';
import { Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';

import { color, spacing } from '../../theme';
import { TextFieldProps } from './TextField.props';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing.small,
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontSize: 14,
  backgroundColor: color.transparent,
}

const enhance = (style: TextStyle, styleOverride: TextStyle | TextStyle[]) => {
  return mergeAll(flatten([style, styleOverride]))
}

export const TextField: React.FunctionComponent<TextFieldProps> = props => {
  const {
    label,
    onFocus,
    onBlur,
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
        style={inputStyle}
        selectionColor={color.palette.appPrimaryColor}
        ref={forwardedRef}
      />
      { error &&
        <Text
          style={{
            fontSize: 12,
            padding: 4,
            color: color.palette.appErrorsColor
          }}
        >{error}</Text>
      }
    </View>
  )
}