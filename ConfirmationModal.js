import React from 'react';
import { Modal, ScrollView, Text, View } from 'react-native';
import styles from './styles';

export default function ConfirmationModal({ title = 'Submitted search term:', message, onPressConfirm, ...props }) {
  return (
    <Modal transparent {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          {title ? <Text style={styles.modalText}>{title}</Text> : null}
          <ScrollView style={styles.modalScroll}>
            <Text style={styles.modalText}>{message}</Text>
          </ScrollView>
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
