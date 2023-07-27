/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../hooks';
import MenuOptions from '../MenuOptions/MenuOptions';
import Text, { TextVariant, TextColor } from '../../Texts/Text';

// Internal dependencies.
import styleSheet from './MenuBody.styles';
import { MenuBodyProps } from './MenuBody.types';

const MenuBody: React.FC<MenuBodyProps> = ({
  style,
  description,
  options,
  isMultiSelect,
}) => {
  const { styles } = useStyles(styleSheet, { style });
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
    <View style={styles.base}>
      {description && <View>{renderDescription()}</View>}
      <MenuOptions options={options} isMultiSelect={isMultiSelect} />
    </View>
  );
};

export default MenuBody;
