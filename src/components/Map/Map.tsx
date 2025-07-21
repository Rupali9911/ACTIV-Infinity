import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import MapView, { LatLng, MapPressEvent, Marker, Region } from 'react-native-maps';

interface CustomMapProps {
  initialRegion: Region;
  markers?: LatLng[];
  onMapPress?: (coordinate: LatLng) => void;
  style?: ViewStyle;
  enableUserLocation?: boolean;
}

const CustomMap: React.FC<CustomMapProps> = ({
  initialRegion,
  markers = [],
  onMapPress,
  style = {},
  enableUserLocation = true,
}) => {
  const [customMarkers, setCustomMarkers] = useState<LatLng[]>(markers);

  const handleMapPress = (event: MapPressEvent) => {
    const coordinate = event.nativeEvent.coordinate;

    if (onMapPress) {
      onMapPress(coordinate);
    } else {
      setCustomMarkers(prev => [...prev, coordinate]);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={enableUserLocation}
        onPress={handleMapPress}
      >
        {customMarkers.map((marker, index) => (
          <Marker key={index} coordinate={marker} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CustomMap;
