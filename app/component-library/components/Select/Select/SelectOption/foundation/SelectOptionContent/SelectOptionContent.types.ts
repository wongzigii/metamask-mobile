// Third party dependencies.
import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

// External dependencies.
import Avatar from '../../../../../Avatars/Avatar/Avatar';

/**
 * SelectOptionContent component props.
 */
export interface SelectOptionContentProps {
  /**
   * Content to wrap to display.
   */
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  startAccessory?: ReactElement<typeof Avatar>;
  endAccessory?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

/**
 * Style sheet input parameters.
 */
export type SelectOptionContentStyleSheetVars = Pick<
  SelectOptionContentProps,
  'style'
>;
