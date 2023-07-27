// Third party dependencies.
import { ViewProps } from 'react-native';

// Internal dependencies.
import { MenuOptionProps } from './MenuOption/MenuOption.types';

/**
 * MenuOptions component props.
 */
export interface MenuOptionsProps extends ViewProps {
  options: MenuOptionProps[];
  isMultiSelect?: boolean;
}

/**
 * Style sheet input parameters.
 */
export type MenuOptionsStyleSheetVars = Pick<MenuOptionsProps, 'style'>;
