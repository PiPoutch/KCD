import * as React from 'react';
import { View } from 'react-native';

import { env } from '../../../env/env';
import { TextField } from '../../components';
import { convert } from '../../native_modules/ConversionPackage';
import { ConversionScreenStyle } from './ConversionScreen.style';

export const ConversionScreen: React.FunctionComponent = () => {
  return (
    <View style={ConversionScreenStyle.FULL}>
        <View style={ConversionScreenStyle.CONTAINER}>
          <TextField
            label="TEST"
            onChangeText={async () => {
              try {
                console.log(JSON.parse(await convert('http://data.fixer.io/api/convert', 'GBP', 'JPY', '25', env.FIXER_API_KEY)))
              }
              catch (error) {
                console.log(error)
              }
            }}
            style={ConversionScreenStyle.text_input}
            keyboardType='numeric'
            error='test'
          >
            
          </TextField>
        </View>
    </View>
  )}