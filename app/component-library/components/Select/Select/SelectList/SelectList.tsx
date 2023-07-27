/* eslint-disable react/prop-types */

// Third party dependencies.
import React, { useState } from 'react';
import { View } from 'react-native';

// External dependencies.
import { useStyles } from '../../../../hooks';
import SelectItem from '../SelectItem/SelectItem';

// Internal dependencies.
import styleSheet from './SelectList.styles';
import { SelectListProps } from './SelectList.types';

const SelectList: React.FC<SelectListProps> = ({ style, options }) => {
  const { styles } = useStyles(styleSheet, { style });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (optionId: number) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };

  return (
    <View style={styles.base}>
      {options.map((option, index) => (
        <SelectItem
          key={index}
          isSelected={index === selectedOption}
          onPress={() => handleOptionClick(index)}
          isDisabled={option.isDisabled}
        >
          {option.children}
        </SelectItem>
      ))}
    </View>
  );
};

export default SelectList;
