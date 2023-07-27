// Third party dependencies.
import { ViewProps } from 'react-native';

// External dependencies.
import { MultiSelectItemProps } from '../MultiSelectItem/MultiSelectItem.types';

/**
 * MultiSelectList component props.
 */
export interface MultiSelectListProps extends ViewProps {
  options: MultiSelectItemProps[];
}
