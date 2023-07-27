// External dependencies.
import { MenuOptionProps } from '../../../Menu/MenuOptions/MenuOption/MenuOption.types';

/**
 * SelectButton component props.
 */
export interface SelectButtonProps extends MenuOptionProps {
  isDanger?: boolean;
}

/**
 * Style sheet input parameters.
 */
export type SelectButtonStyleSheetVars = Pick<SelectButtonProps, 'style'> & {
  isDisabled: boolean;
  isDanger: boolean;
};
