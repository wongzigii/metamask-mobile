// Third party dependencies.
import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

// External dependencies.
import Avatar from '../../../Avatars/Avatar/Avatar';

/**
 * MenuOption component props.
 */
export interface MenuOptionProps extends ViewProps {
  /**
   * Content to wrap to display.
   */
  children?: React.ReactNode;
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  startAccessory?: ReactElement<typeof Avatar>;
  endAccessory?: React.ReactNode;
  isDisabled?: boolean;
  isSelected?: boolean;
}

/**
 * Style sheet input parameters.
 */
export type MenuOptionStyleSheetVars = Pick<MenuOptionProps, 'style'> & {
  isDisabled: boolean;
};
