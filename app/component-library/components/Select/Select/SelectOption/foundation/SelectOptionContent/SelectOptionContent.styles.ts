// Third party dependencies.
import { StyleSheet } from 'react-native';

// Internal dependencies.
import { SelectOptionContentStyleSheetVars } from './SelectOptionContent.types';

/**
 * Style sheet function for SelectOptionContent component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { vars: SelectOptionContentStyleSheetVars }) => {
  const { vars } = params;
  const { style } = vars;
  return StyleSheet.create({
    childrenWrapper: {
      flex: 1,
    },
    info: {
      flex: 1,
    },
  });
};

export default styleSheet;
