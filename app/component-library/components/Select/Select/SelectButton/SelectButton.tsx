/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../../hooks';
import Icon, { IconName, IconSize } from '../../../Icons/Icon';
import SelectOptionContent from '../SelectOption/foundation/SelectOptionContent/SelectOptionContent';

// Internal dependencies.
import styleSheet from './SelectButton.styles';
import { SelectButtonProps } from './SelectButton.types';

const SelectButton: React.FC<SelectButtonProps> = ({
  style,
  isDisabled = false,
  isDanger = false,
  onPress,
  ...props
}) => {
  const { styles } = useStyles(styleSheet, {
    style,
    isDisabled,
    isDanger,
  });
  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={1}
      style={styles.base}
      onPress={onPress}
    >
      <View style={styles.contentWrapper}>
        <SelectOptionContent {...props} />
      </View>
      <View style={styles.iconWrapper}>
        <Icon name={IconName.ArrowDown} size={IconSize.Sm} />
      </View>
    </TouchableOpacity>
  );
};

export default SelectButton;
