import classNames from 'classnames';
import React from 'react';

import { BootstrapStyle } from '../@typings';

export interface ButtonProps {
  label?: string;
  onClickAction?: (event: React.MouseEvent<HTMLElement>) => void;
  iconUrl?: string;
  className?: string;
  style?: React.CSSProperties;
  tooltip?: string;
  bootstrapStyle?: BootstrapStyle;
}

export const Button = (props: ButtonProps) => {
  const classes = classNames(
    'clipboardTextCopy btn mx-button',
    props.className,
    {
      [`btn-${props.bootstrapStyle}`]: !!props.bootstrapStyle,
    }
  );
  return (
    <button
      type="button"
      className={classes}
      onClick={props.onClickAction}
      style={props.style}
      title={props.tooltip}
    >
      {props.iconUrl ? (
        <img className="clipboardTextCopy-img" src={props.iconUrl}></img>
      ) : null}
      {props.label}
    </button>
  );
};
