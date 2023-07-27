// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';

// Internal dependencies.
import { MenuOptionStyleSheetVars } from './MenuOption.types';

/**
 * Style sheet function for MenuOption component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { vars: MenuOptionStyleSheetVars }) => {
  const { vars } = params;
  const { style, isDisabled } = vars;
  return StyleSheet.create({
    base: Object.assign(
      {
        flexDirection: 'row',
        alignItems: 'center',
        opacity: isDisabled ? 0.5 : 1,
      } as ViewStyle,
      style,
    ) as ViewStyle,
    childrenWrapper: {
      flex: 1,
    },
    infoWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    startAccessory: {
      marginRight: 12,
    },
    info: {
      flex: 1,
    },
    endAccessory: {
      marginLeft: 12,
    },
  });
};

export default styleSheet;
