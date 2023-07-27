// External dependencies.
import { HeaderProps } from '../../Header/Header.types';

/**
 * MenuHeader component props.
 */
export interface MenuHeaderProps extends HeaderProps {
  /**
   * Optional function to trigger when pressing the back button.
   */
  onBack?: () => void;
  /**
   * Optional function to trigger when pressing the close button.
   */
  onClose?: () => void;
}

/**
 * Style sheet input parameters.
 */
export type MenuHeaderStyleSheetVars = Pick<MenuHeaderProps, 'style'>;
