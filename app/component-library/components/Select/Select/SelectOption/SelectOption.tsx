/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../../hooks';
import SelectItem from '../SelectItem/SelectItem';
import SelectOptionContent from './foundation/SelectOptionContent/SelectOptionContent';

// Internal dependencies.
import styleSheet from './SelectOption.styles';
import { SelectOptionProps } from './SelectOption.types';

const SelectOption: React.FC<SelectOptionProps> = ({
  style,
  children,
  isSelected,
  isDisabled,
  ...props
}) => {
  const { styles } = useStyles(styleSheet, {
    style,
  });

  return (
    <SelectItem
      style={styles.base}
      gap={12}
      {...props}
      isSelected={isSelected}
      isDisabled={isDisabled}
    >
      {children ? (
        <View style={styles.childrenWrapper}>{children}</View>
      ) : (
        <SelectOptionContent {...props} />
      )}
    </SelectItem>
  );
};

export default SelectOption;
