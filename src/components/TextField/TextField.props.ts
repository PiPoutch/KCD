import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface TextFieldProps extends TextInputProps {
  
  placeholder?: string
  label?: string

  style?: ViewStyle | ViewStyle[]
  inputStyle?: TextStyle | TextStyle[]

  forwardedRef?: any

  onFocus?: Function
  onBlur?: Function
  error?: String
}