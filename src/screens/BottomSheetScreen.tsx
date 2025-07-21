import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import BottomSheet from '../components/BottomSheet/BottomSheet';

const BottomScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Button title="Open Bottom Sheet" onPress={() => setVisible(true)} />

      <BottomSheet visible={visible} onClose={() => setVisible(false)}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Options</Text>
        <Text style={{marginTop: 10}}>• Share</Text>
        <Text>• Edit</Text>
        <Text>• Delete</Text>
      </BottomSheet>
    </View>
  );
};

export default BottomScreen;
