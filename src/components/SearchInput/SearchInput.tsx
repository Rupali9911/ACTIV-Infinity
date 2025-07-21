import React from 'react';
import {
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // You can also use Feather or MaterialIcons
import styles from './styles';

interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  onClear,
  placeholder = 'Search...',
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {/* <Ionicons name="search" size={20} color="#999" style={styles.icon} /> */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear ?? (() => onChangeText(''))}>
          {/* <Ionicons name="close-circle" size={20} color="#999" /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};


export default SearchInput;
