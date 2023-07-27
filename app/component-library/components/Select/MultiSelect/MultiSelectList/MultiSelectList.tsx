/* eslint-disable react/prop-types */

// Third party dependencies.
import React, { useState } from 'react';
import { View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../../hooks';
import MultiSelectItem from '../MultiSelectItem/MultiSelectItem';

// Internal dependencies.
import styleSheet from './MultiSelectList.styles';
import { MultiSelectListProps } from './MultiSelectList.types';

const MultiSelectList: React.FC<MultiSelectListProps> = ({
  style,
  options,
}) => {
  const { styles } = useStyles(styleSheet, { style });
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleOptionClick = (optionId: number) => {
    const updatedSelection = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];
    setSelectedOptions(updatedSelection);
  };

  return (
    <View style={styles.base}>
      {options.map((option, index) => (
        <MultiSelectItem
          key={index}
          isSelected={selectedOptions.includes(index)}
          onPress={() => handleOptionClick(index)}
        >
          {option.children}
        </MultiSelectItem>
      ))}
    </View>
  );
};

export default MultiSelectList;
