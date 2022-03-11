import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeName, setName} from '../../Reduxtoolkit/Reducer/school';
// import {changeName} from '../../Reduxtoolkit/Reducer/school';

export default function School() {
  const {data} = useSelector(state => state.school);
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>School</Text>

      <Text>{data.name}</Text>
      <Text>{data.since}</Text>
      <Text> {data.teachers[0]}</Text>

      <Button
        title="Change School"
        onPress={() => {
          dispatch(changeName());
        }}
      />
      <Button
        title="Set NAme"
        color={'yellow'}
        onPress={() => {
          dispatch(setName('Excellence'));
        }}
      />
    </View>
  );
}
