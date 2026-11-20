import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import ConfirmationModal from './ConfirmationModal';
import styles from './styles';

function Input({ label, ...props }) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

export default function Search() {
  const [changedText, setChangedText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [visible, setVisible] = useState(false);

  function closeModal() {
    setVisible(false);
  }

  return (
    <View>
      <Input
        label="Search:"
        accessibilityLabel="Search term"
        placeholder="Search"
        returnKeyType="search"
        value={changedText}
        onChangeText={setChangedText}
        onSubmitEditing={(e) => {
          setSubmittedText(e.nativeEvent.text);
          setVisible(true);
        }}
      />
      <ConfirmationModal
        visible={visible}
        message={submittedText}
        onPressConfirm={closeModal}
        onRequestClose={closeModal}
      />
    </View>
  );
}
