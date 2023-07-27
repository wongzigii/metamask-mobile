// Third party dependencies.
import { ViewProps } from 'react-native';

// External dependencies.
import { SelectItemProps } from '../SelectItem/SelectItem.types';

/**
 * SelectList component props.
 */
export interface SelectListProps extends ViewProps {
  options: SelectItemProps[];
}
