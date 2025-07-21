import React from 'react';
import { SafeAreaView } from 'react-native';
import { LatLng, Region } from 'react-native-maps';
import CustomMap from '../components/Map/Map';

const MapScreen: React.FC = () => {
  const initialRegion: Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMapTap = (coord: LatLng) => {
    console.log('User tapped at:', coord);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomMap
        initialRegion={initialRegion}
        onMapPress={handleMapTap}
      />
    </SafeAreaView>
  );
};

export default MapScreen;
