// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';

// External dependencies.
import { Theme } from '../../../../../util/theme/models';

// Internal dependencies.
import { SelectButtonStyleSheetVars } from './SelectButton.types';

/**
 * Style sheet function for SelectButton component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: SelectButtonStyleSheetVars;
}) => {
  const { vars, theme } = params;
  const { style, isDisabled, isDanger } = vars;
  return StyleSheet.create({
    base: Object.assign(
      {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background.default,
        borderWidth: isDanger ? 2 : 1,
        borderColor: isDanger
          ? theme.colors.error.default
          : theme.colors.border.default,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        opacity: isDisabled ? 0.5 : 1,
      } as ViewStyle,
      style,
    ) as ViewStyle,
    contentWrapper: {
      flex: 1,
    },
    iconWrapper: {
      marginLeft: 8,
    },
  });
};

export default styleSheet;
