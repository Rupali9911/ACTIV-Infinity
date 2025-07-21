import React from 'react';
import {
    Modal,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import styles from './styles';

interface CustomModalProps {
  visible: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = 'OK',
  cancelText = 'Cancel',
  style,
  titleStyle,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, style]}>
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          <View style={styles.content}>{children}</View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>{cancelText}</Text>
            </TouchableOpacity>
            {onConfirm && (
              <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={onConfirm}>
                <Text style={[styles.buttonText, { color: '#fff' }]}>{confirmText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
