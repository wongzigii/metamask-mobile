// Third party dependencies.
import { TouchableOpacityProps } from 'react-native';

// External dependencies.
import { SelectOptionContentProps } from '../SelectOption/foundation/SelectOptionContent/SelectOptionContent.types';

/**
 * SelectButton component props.
 */
export interface SelectButtonProps
  extends SelectOptionContentProps,
    TouchableOpacityProps {
  isDisabled?: boolean;
  isDanger?: boolean;
}

/**
 * Style sheet input parameters.
 */
export type SelectButtonStyleSheetVars = Pick<SelectButtonProps, 'style'> & {
  isDisabled: boolean;
  isDanger: boolean;
};
