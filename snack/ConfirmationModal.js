import React from 'react';
import { Modal, Text, View } from 'react-native';
import styles from './styles';

export default function ConfirmationModal({ message, onPressConfirm, ...props }) {
  return (
    <Modal transparent {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>Submitted search term:</Text>
          <Text style={styles.modalText}>{message}</Text>
          <Text
            style={styles.modalButton}
            accessibilityRole="button"
            onPress={onPressConfirm}
          >
            Close
          </Text>
        </View>
      </View>
    </Modal>
  );
}
