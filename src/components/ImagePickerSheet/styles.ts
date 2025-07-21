
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      width: 130,
      height: 130,
      borderRadius: 12,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    iconWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    sheetContent: {
      padding: 20,
    },
    sheetButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
    },
    sheetText: {
      marginLeft: 10,
      fontSize: 16,
    },
  });
  