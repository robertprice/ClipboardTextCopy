import React from 'react';

import { Button } from './Button';
import { Link } from './Link';

export interface LinkButtonProps {
  labelCaption: string;
  tooltip: string;
  iconUrl: string;
  renderType: string;
  buttonType?: ButtonType;
  buttonClass?: string;
  tabIndex: number;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const LinkButton = (props: LinkButtonProps) => {
  if (props.renderType === 'button')
    return (
      <Button
        label={props.labelCaption}
        onClickAction={props.onClick}
        iconUrl={props.iconUrl}
        tooltip={props.tooltip}
        className={props.buttonClass}
        tabIndex={props.tabIndex}
        buttonType={props.buttonType}
      />
    );
  if (props.renderType === 'link')
    return (
      <Link
        label={props.labelCaption}
        onClickAction={props.onClick}
        iconUrl={props.iconUrl}
        tooltip={props.tooltip}
        tabIndex={props.tabIndex}
      />
    );
  return null;
};
