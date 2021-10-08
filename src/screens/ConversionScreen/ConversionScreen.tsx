import { Picker } from '@react-native-picker/picker';
import * as React from 'react';
import { View } from 'react-native';

import { env } from '../../../env/env';
import { Button, TextField } from '../../components';
import { convert } from '../../native_modules/ConversionPackage';
import { color } from '../../theme';
import { ConversionScreenStyle, ConversionScreenTextStyle } from './ConversionScreen.style';

export type Currency = 'USD' | 'EUR' | 'RSD'

export const ConversionScreen: React.FunctionComponent = () => {
  const [currencyFrom, setCurrencyFrom] = React.useState<Currency>('EUR')
  const [currencyTo, setCurrencyTo] = React.useState<Currency>('USD')
  const [amount, setAmount] = React.useState<string>('0')
  const [result, setResult] = React.useState<string>('0')
  const [error, setError] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)



  return (
    <View style={ConversionScreenStyle.FULL}>
      <View style={ConversionScreenStyle.CONTAINER}>
        <View style={ConversionScreenStyle.currency_line}>
          {/* Textfield for the currency to be converted */}
          <TextField
            value={amount}
            onChangeText={ (amountInput) => {
              setAmount(amountInput)
            }}
            style={ConversionScreenStyle.text_input}
            inputStyle={ConversionScreenTextStyle.text_input}
            keyboardType='numeric'
            error={null}
          />
          <Picker
            selectedValue={currencyFrom}
            onValueChange={(itemValue) => {
              setCurrencyFrom(itemValue)
          }}
            style={ConversionScreenStyle.picker}
          >
            <Picker.Item label='EUR' value="EUR" />
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="RSD" value="RSD" />
          </Picker>
        </View>


        <View style={ConversionScreenStyle.currency_line}>
          {/* Textfield for the result of the conversion */}
          <TextField
            value={amount}
            editable={false}
            style={ConversionScreenStyle.text_input}
            inputStyle={ConversionScreenTextStyle.text_input}
            error={error ? error : null}
          />
          <Picker
            selectedValue={currencyTo}
            onValueChange={(itemValue) => {
              setCurrencyTo(itemValue)
          }}
          style={{...ConversionScreenStyle.picker, borderBottomColor: color.transparent}}
          >
            <Picker.Item label='EUR' value="EUR" />
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="RSD" value="RSD" />
          </Picker>
        </View>
        <Button
        text='convert'
        disabled={isLoading}
        style={ConversionScreenStyle.button}
        onPress={async () => {
          setIsLoading(true)
          try {
            const response = JSON.parse(await convert('http://data.fixer.io/api/convert', currencyFrom, currencyTo, amount, env.FIXER_API_KEY))
            if (response && response.result) {
              setResult(response.result.toString())
            }
            console.log(response)
            setIsLoading(false)
          }
          catch (error) {
            setError('Unknown error')
            setIsLoading(false)
          }
        }}
        >

        </Button>
      </View>
    </View>
  )}

