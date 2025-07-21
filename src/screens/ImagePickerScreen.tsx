import React, { useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { Asset } from 'react-native-image-picker';
import CustomButton from '../components/Button/Button';
import ImagePickerSheet from '../components/ImagePickerSheet/ImagePickerSheet';
import CustomModal from '../components/Modal/CustomModal';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../redux/slices/counterSlice';

const ImageScreen: React.FC = () => {
  const [image, setImage] = useState<Asset | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.counter.value);

  return (
    <SafeAreaView style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 18, marginBottom: 10}}>
        Upload Profile Picture
      </Text>
      <ImagePickerSheet imageUri={image?.uri} onImagePicked={setImage} />
      <CustomButton title="Press me" />
      <View>
        <Button title="Open Modal" onPress={() => setModalVisible(true)} />
        <CustomModal
          visible={modalVisible}
          title="Delete Item"
          onClose={() => setModalVisible(false)}
          onConfirm={() => {
            console.log('Confirmed!');
            setModalVisible(false);
          }}
          confirmText="Delete"
          cancelText="Cancel">
          <Text>Are you sure you want to delete this item?</Text>
        </CustomModal>
      </View>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 24}}>Count: {counter}</Text>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button title="Add 5" onPress={() => dispatch(incrementByAmount(5))} />
      </View>
    </SafeAreaView>
  );
};

export default ImageScreen;
