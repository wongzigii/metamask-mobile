/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../../hooks';
import Text, { TextVariant, TextColor } from '../../../Texts/Text';

// Internal dependencies.
import styleSheet from './MenuOption.styles';
import { MenuOptionProps } from './MenuOption.types';

const MenuOption: React.FC<MenuOptionProps> = ({
  style,
  children,
  label,
  description,
  startAccessory,
  endAccessory,
  isDisabled = false,
  ...props
}) => {
  const { styles } = useStyles(styleSheet, {
    style,
    isDisabled,
  });

  const renderLabel = () => {
    return typeof label === 'string' ? (
      <Text variant={TextVariant.BodyLGMedium}>{label}</Text>
    ) : (
      label
    );
  };

  const renderDescription = () => {
    return typeof description === 'string' ? (
      <Text variant={TextVariant.BodyMD} color={TextColor.Alternative}>
        {description}
      </Text>
    ) : (
      description
    );
  };
  return (
    <View style={styles.base} {...props}>
      {children ? (
        <View style={styles.childrenWrapper}>{children}</View>
      ) : (
        <View style={styles.infoWrapper}>
          {startAccessory && <View>{startAccessory}</View>}
          <View style={styles.info}>
            {label && renderLabel()}
            {description && renderDescription()}
          </View>
          {endAccessory && <View>{endAccessory}</View>}
        </View>
      )}
    </View>
  );
};

export default MenuOption;
