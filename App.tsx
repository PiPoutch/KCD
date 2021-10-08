import React from 'react';
import { useColorScheme } from 'react-native';

import { ConversionScreen } from './src/screens';

import type {Node} from 'react';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000'
  };

  return (
    <ConversionScreen />
  );
};


export default App;
