/* eslint-disable react/prop-types */

// Third party dependencies.
import React, { useState, useCallback, useRef } from 'react';

// External dependencies.
import { useStyles } from '../../../hooks';
import SelectButton from './SelectButton/SelectButton';
import BottomSheet, { BottomSheetRef } from '../../BottomSheets/BottomSheet';
import MenuHeader from '../../Menu/MenuHeader/MenuHeader';
import MenuBody from '../../Menu/MenuBody/MenuBody';

// Internal dependencies.
import styleSheet from './Select.styles';
import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({
  style,
  label,
  description,
  options,
}) => {
  const { styles } = useStyles(styleSheet, { style });
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const onMenuOpen = useCallback(() => {
    setIsMenuOpened(true);
  }, [setIsMenuOpened]);

  const onMenuClose = useCallback(() => {
    setIsMenuOpened(false);
  }, [setIsMenuOpened]);

  return (
    <>
      <SelectButton {...options[0]} onPress={onMenuOpen} />
      {isMenuOpened && (
        <BottomSheet ref={bottomSheetRef} onClose={onMenuClose}>
          <MenuHeader>{label}</MenuHeader>
          <MenuBody description={description} options={options} />
        </BottomSheet>
      )}
    </>
  );
};

export default Select;
