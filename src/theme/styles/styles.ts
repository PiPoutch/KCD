import { ViewStyle } from 'react-native';

import { color } from '../color';
import { spacing } from '../spacing';

export const styles: { [name: string]: ViewStyle } = {
  FULL: {
    flex: 1,
    backgroundColor: color.palette.appBodyBg,
  },
  CONTAINER: {
    flex: 1,
    backgroundColor: color.palette.appBodyBg,
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.small,
  },
}