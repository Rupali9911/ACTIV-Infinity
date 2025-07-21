import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      marginVertical: 12,
    },
    label: {
      marginBottom: 6,
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
    },
    leftIcon: {
      marginRight: 6,
    },
    textInput: {
      flex: 1,
      height: 48,
      fontSize: 16,
      color: '#000',
    },
    eyeIcon: {
      paddingHorizontal: 6,
    },
    placeholderLabel: {
      position: 'absolute',
      top: 48,
      left: 40,
      color: '#aaa',
      fontSize: 14,
    },
    inputError: {
      borderColor: 'red',
    },
    errorText: {
      marginTop: 4,
      color: 'red',
      fontSize: 13,
    },
  });