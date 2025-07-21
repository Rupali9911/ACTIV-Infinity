
import { useField } from 'formik';
import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';

interface CustomTextInputProps extends TextInputProps {
  name: string;
  label?: string;
  isPassword?: boolean;
  icon?: string; // icon name from MaterialCommunityIcons
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  name,
  label,
  isPassword = false,
  icon,
  ...rest
}) => {
  const [field, meta, helpers] = useField(name);
  const [secure, setSecure] = useState(isPassword);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.inputWrapper, showError && styles.inputError]}>
        {icon && (
          <Icon name={icon} size={20} color="#777" style={styles.leftIcon} />
        )}

        <TextInput
          value={field.value}
          onChangeText={helpers.setValue}
          onBlur={() => helpers.setTouched(true)}
          secureTextEntry={secure}
          style={styles.textInput}
          placeholder=""
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Icon
              name={secure ? 'eye-off' : 'eye'}
              size={20}
              color="#777"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      {rest.placeholder && (
        <Text style={styles.placeholderLabel}>{rest.placeholder}</Text>
      )}

      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};


export default CustomTextInput;
