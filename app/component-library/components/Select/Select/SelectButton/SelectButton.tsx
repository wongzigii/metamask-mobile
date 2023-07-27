/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../../hooks';
import Text, { TextVariant } from '../../../Texts/Text';
import Icon, { IconName, IconSize } from '../../../Icons/Icon';
import MenuOption from '../../../Menu/MenuOptions/MenuOption/MenuOption';

// Internal dependencies.
import styleSheet from './SelectButton.styles';
import { SelectButtonProps } from './SelectButton.types';

const SelectButton: React.FC<SelectButtonProps> = ({
  style,
  isDisabled = false,
  isDanger = false,
  hitSlop,
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
      <View style={styles.menuOptionWrapper}>
        <MenuOption {...props} />
      </View>
      <View style={styles.iconWrapper}>
        <Icon name={IconName.ArrowDown} size={IconSize.Sm} />
      </View>
    </TouchableOpacity>
  );
};

export default SelectButton;
