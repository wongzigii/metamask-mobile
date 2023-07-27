// Third party dependencies.
import { ViewProps } from 'react-native';

// External dependencies.
import { MenuOptionsProps } from '../MenuOptions/MenuOptions.types';

/**
 * MenuBody component props.
 */
export interface MenuBodyProps extends MenuOptionsProps {
  description?: string | React.ReactNode;
}
