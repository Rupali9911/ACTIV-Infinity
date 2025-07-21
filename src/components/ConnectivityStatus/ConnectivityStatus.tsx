import NetInfo from '@react-native-community/netinfo';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ConnectivityStatus = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) =>
      setIsConnected(state.isConnected),
    );

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Your connection is not connected. Please check your internet.
        </Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ConnectivityStatus;
