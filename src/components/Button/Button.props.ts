import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {

  text?: string

  style?: ViewStyle | ViewStyle[]

  textStyle?: TextStyle | TextStyle[]

  children?: React.ReactNode

  loading?: boolean

  disabled?: boolean

  mode?: string

  backgroundColor?: string
}
