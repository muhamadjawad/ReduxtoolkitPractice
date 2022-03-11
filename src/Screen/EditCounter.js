import {View, Text, Button} from 'react-native';
import React from 'react';

export default function EditCounter() {
  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Text> Edit Counter</Text>
      <Button title="Update" onPress={() => {}} />
    </View>
  );
}
