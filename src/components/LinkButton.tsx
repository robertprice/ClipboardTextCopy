import React from 'react';

import { Button } from './Button';
import { Link } from './Link';

export interface LinkButtonProps {
  labelCaption: string;
  tooltip: string;
  iconUrl: string;
  renderType: string;
  style?: React.CSSProperties;
  className?: string;
  buttonstyle: BootstrapStyle;
  buttonClass?: string;
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
        bootstrapStyle={props.buttonstyle}
      />
    );
  if (props.renderType === 'link')
    return (
      <Link
        label={props.labelCaption}
        onClickAction={props.onClick}
        iconUrl={props.iconUrl}
        tooltip={props.tooltip}
      />
    );
  return null;
};
