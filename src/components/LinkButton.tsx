import React from 'react';

import { BootstrapStyle } from '../@typings';
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
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const LinkButton = (props: LinkButtonProps) => {
  if (props.renderType === 'button')
    return (
      <Button
        label={props.labelCaption}
        onClickAction={props.onClick}
        iconUrl={props.iconUrl}
        className={props.className}
        style={props.style}
        tooltip={props.tooltip}
        bootstrapStyle={props.buttonstyle}
      />
    );
  if (props.renderType === 'link')
    return (
      <Link
        label={props.labelCaption}
        onClickAction={props.onClick}
        iconUrl={props.iconUrl}
        className={props.className}
        style={props.style}
        tooltip={props.tooltip}
      />
    );
  return null;
};
