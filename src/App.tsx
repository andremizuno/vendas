/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  color: #ff0015;
  font-size: 34px;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Olá !!!!</Text>
      <TextNew>novo</TextNew>
    </SafeAreaView>
  );
};

export default App;
