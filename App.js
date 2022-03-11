import {View} from 'react-native';
import React from 'react';
import Counter from './src/Screen/Counter';
import {Provider, useDispatch, useSelector} from 'react-redux';
import EditCounter from './src/Screen/EditCounter';
import {store} from './Reduxtoolkit/store';
import School from './src/Screen/School';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: 'yellow'}}>
        {/* <Text></Text> */}
        {/* <Counter /> */}
        <School />
      </View>
    </Provider>
  );
}
