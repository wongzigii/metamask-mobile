import { StyleSheet } from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    textContent: { paddingHorizontal: 16 },
    actionsContainer: {
      flexDirection: 'row',
      padding: 16,
    },
    cancelButton: { flex: 1, marginRight: 8 },
    confirmButton: { flex: 1, marginLeft: 8 },
  });

export default createStyles;
