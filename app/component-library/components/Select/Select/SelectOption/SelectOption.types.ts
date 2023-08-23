// Third party dependencies.
import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

// External dependencies.
import { SelectItemProps } from '../SelectItem/SelectItem.types';

// Internal dependencies.
import { SelectOptionContentProps } from './foundation/SelectOptionContent/SelectOptionContent.types';

/**
 * SelectOption component props.
 */
export interface SelectOptionProps
  extends SelectItemProps,
    SelectOptionContentProps {}

/**
 * Style sheet input parameters.
 */
export type SelectOptionStyleSheetVars = Pick<SelectOptionProps, 'style'>;
