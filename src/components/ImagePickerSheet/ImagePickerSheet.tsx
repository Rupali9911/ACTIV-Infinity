import React, { useRef } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { styles } from './styles';
// import Icon from 'react-native-vector-icons/Ionicons';

interface ImagePickerProps {
  imageUri?: string;
  onImagePicked: (image: Asset | null) => void;
  style?: ViewStyle;
  iconSize?: number;
  iconColor?: string;
  showPreview?: boolean;
}

const ImagePickerSheet: React.FC<ImagePickerProps> = ({
  imageUri,
  onImagePicked,
  style,
  iconSize = 40,
  iconColor = '#999',
  showPreview = true,
}) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const openSheet = () => {
    actionSheetRef.current?.show();
  };

  const pickFromGallery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };

    const result = await launchImageLibrary(options);
    if (result.assets && result.assets.length > 0) {
      onImagePicked(result.assets[0]);
    }
    actionSheetRef.current?.hide();
  };

  const takePhoto = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 0.8,
      saveToPhotos: true,
    };

    const result = await launchCamera(options);
    if (result.assets && result.assets.length > 0) {
      onImagePicked(result.assets[0]);
    }
    actionSheetRef.current?.hide();
  };

  const removeImage = () => {
    onImagePicked(null);
    actionSheetRef.current?.hide();
  };

  return (
    <>
      <TouchableOpacity style={[styles.container, style]} onPress={openSheet}>
        {showPreview && imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.iconWrapper}>
            {/* <Icon name="image-outline" size={iconSize} color={iconColor} /> */}
            <Text style={{ marginTop: 5, fontSize: 12, color: '#555' }}>Pick Image</Text>
          </View>
        )}
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef}>
        <View style={styles.sheetContent}>
          <TouchableOpacity style={styles.sheetButton} onPress={takePhoto}>
            {/* <Icon name="camera-outline" size={22} color="#000" /> */}
            <Text style={styles.sheetText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sheetButton} onPress={pickFromGallery}>
            {/* <Icon name="image-outline" size={22} color="#000" /> */}
            <Text style={styles.sheetText}>Choose from Gallery</Text>
          </TouchableOpacity>

          {imageUri && (
            <TouchableOpacity style={styles.sheetButton} onPress={removeImage}>
              {/* <Icon name="trash-outline" size={22} color="red" /> */}
              <Text style={[styles.sheetText, { color: 'red' }]}>Remove Image</Text>
            </TouchableOpacity>
          )}
        </View>
      </ActionSheet>
    </>
  );
};

export default ImagePickerSheet;
