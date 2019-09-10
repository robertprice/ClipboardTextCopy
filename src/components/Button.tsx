import classNames from 'classnames';
import React from 'react';

export interface ButtonProps {
  label?: string;
  onClickAction?: (event: React.MouseEvent<HTMLElement>) => void;
  iconUrl?: string;
  tooltip?: string;
  className?: string;
  bootstrapStyle?: BootstrapStyle;
  tabIndex: number;
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
      title={props.tooltip}
      tabIndex={props.tabIndex}
    >
      {props.iconUrl ? (
        <img className="clipboardTextCopy-img" src={props.iconUrl}></img>
      ) : null}
      {props.label}
    </button>
  );
};
