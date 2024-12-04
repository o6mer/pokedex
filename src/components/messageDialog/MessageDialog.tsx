import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Modal, ModalProps, Portal} from 'react-native-paper';

interface Props extends Omit<ModalProps, 'children'> {
  title: string;
  onRequestClose: () => void;
}

const MessageDialog = ({visible, title, onRequestClose, ...props}: Props) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => onRequestClose()}
        contentContainerStyle={styles.container}
        {...props}>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Modal>
    </Portal>
  );
};

export {MessageDialog};
