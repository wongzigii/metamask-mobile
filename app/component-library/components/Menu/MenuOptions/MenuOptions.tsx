/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../hooks';
import MenuOption from './MenuOption/MenuOption';
import MultiSelectList from '../../Select/MultiSelect/MultiSelectList/MultiSelectList';
import SelectList from '../../Select/Select/SelectList/SelectList';

// Internal dependencies.
import styleSheet from './MenuOptions.styles';
import { MenuOptionsProps } from './MenuOptions.types';

const MenuOptions: React.FC<MenuOptionsProps> = ({
  style,
  options,
  isMultiSelect = false,
}) => {
  const { styles } = useStyles(styleSheet, { style });

  return (
    <View style={styles.base}>
      {isMultiSelect ? (
        <MultiSelectList
          options={options.map((option) => {
            return {
              children: <MenuOption {...option} />,
            };
          })}
        />
      ) : (
        <SelectList
          options={options.map((option) => {
            return {
              children: <MenuOption {...option} />,
            };
          })}
        />
      )}
    </View>
  );
};

export default MenuOptions;
