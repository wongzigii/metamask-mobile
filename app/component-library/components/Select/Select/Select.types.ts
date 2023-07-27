// Third party dependencies.
import { ViewProps } from 'react-native';

// External dependencies.
import { MenuOptionsProps } from '../../Menu/MenuOptions/MenuOptions.types';

/**
 * Select component props.
 */
export interface SelectProps extends MenuOptionsProps {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
}
