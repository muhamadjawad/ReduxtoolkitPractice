import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../Reduxtoolkit/Reducer/counter';

export default function Counter() {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: 'green', height: 40}}>
      <Text>counter</Text>

      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Text>{`Count = ${count}`}</Text>
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
    </View>
  );
}
