// Third party dependencies.
import { ViewProps } from 'react-native';

// External dependencies.
import { SelectOptionContentProps } from '../SelectOption/foundation/SelectOptionContent/SelectOptionContent.types';

/**
 * SelectWrapper component props.
 */
export interface SelectWrapperProps extends ViewProps {
  placeholder?: string;
  value?: SelectOptionContentProps;
  trigger?: React.ReactNode;
}
