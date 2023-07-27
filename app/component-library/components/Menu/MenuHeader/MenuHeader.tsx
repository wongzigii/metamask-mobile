/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';

// External dependencies.
import { useStyles } from '../../../hooks';
import Header from '../../Header';
import ButtonIcon, { ButtonIconVariants } from '../../Buttons/ButtonIcon';
import { IconName } from '../../Icons/Icon';

// Internal dependencies.
import styleSheet from './MenuHeader.styles';
import { MenuHeaderProps } from './MenuHeader.types';

const MenuHeader: React.FC<MenuHeaderProps> = ({
  style,
  children,
  onBack,
  onClose,
  ...props
}) => {
  const { styles } = useStyles(styleSheet, { style });
  const startAccessory = onBack && (
    <ButtonIcon
      iconName={IconName.ArrowLeft}
      variant={ButtonIconVariants.Secondary}
      onPress={onBack}
    />
  );

  const endAccessory = onClose && (
    <ButtonIcon
      iconName={IconName.Close}
      variant={ButtonIconVariants.Secondary}
      onPress={onClose}
    />
  );

  return (
    <Header
      style={styles.base}
      startAccessory={startAccessory}
      endAccessory={endAccessory}
      {...props}
    >
      {children}
    </Header>
  );
};

export default MenuHeader;
