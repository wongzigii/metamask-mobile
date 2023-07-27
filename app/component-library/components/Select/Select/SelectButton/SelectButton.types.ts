// Third party dependencies.
import { TouchableOpacityProps } from 'react-native';

// External dependencies.
import { MenuOptionProps } from '../../../Menu/MenuOptions/MenuOption/MenuOption.types';

/**
 * SelectButton component props.
 */
export interface SelectButtonProps
  extends Omit<MenuOptionProps, 'hitSlop'>,
    TouchableOpacityProps {
  isDanger?: boolean;
}

/**
 * Style sheet input parameters.
 */
export type SelectButtonStyleSheetVars = Pick<SelectButtonProps, 'style'> & {
  isDisabled: boolean;
  isDanger: boolean;
};
