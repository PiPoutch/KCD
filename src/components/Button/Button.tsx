import { flatten, mergeAll } from 'ramda';
import * as React from 'react';
import { Button as ReactButton, ViewStyle } from 'react-native';

import { color } from '../../theme';
import { ButtonProps } from './Button.props';

const ROOT: ViewStyle = {
  minWidth: 150,
  borderRadius: 50
}


function capitalizeFirstLetter(str: string){
  if (str)
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

export function Button(props: ButtonProps) {
  const {
    text,
    disabled,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    onPress,

    backgroundColor,
    ...rest
  } = props

  const rootStyle = mergeAll(flatten([ROOT, styleOverride]))

  return (
    <ReactButton
      title={text}
      style={{
        ...rootStyle,
        backgroundColor: disabled ? color.palette.appButtonDisabledBackgroundColor : backgroundColor || color.palette.appButtonBackgroundColor
      }}
      onPress={onPress}
      {...rest}
      disabled={disabled}
    >
    </ReactButton>
  )
}
