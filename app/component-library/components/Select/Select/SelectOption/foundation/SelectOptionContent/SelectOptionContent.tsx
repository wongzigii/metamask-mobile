/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../../../../hooks';
import Text, { TextVariant, TextColor } from '../../../../../Texts/Text';

// Internal dependencies.
import styleSheet from './SelectOptionContent.styles';
import { SelectOptionContentProps } from './SelectOptionContent.types';

const SelectOptionContent: React.FC<SelectOptionContentProps> = ({
  style,
  label,
  description,
  startAccessory,
  endAccessory,
  ...props
}) => {
  const { styles } = useStyles(styleSheet, {
    style,
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
    <>
      {startAccessory && <View>{startAccessory}</View>}
      <View style={styles.info}>
        {label && renderLabel()}
        {description && renderDescription()}
      </View>
      {endAccessory && <View>{endAccessory}</View>}
    </>
  );
};

export default SelectOptionContent;
